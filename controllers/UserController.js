const User = require('../model/User');
const PDFGenerator = require('pdfkit');
const fs = require('fs');

class UserController{

    async getAll(req, res){
        try{
            const users = await User.findAll();
            console.log(users);
            res.json(users);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    async addUser(req, res){
        try{
            const {firstName, lastName} = req.body;
            const image = req.files.image.data;
            const user = await User.create({firstName, lastName, image});
            return res.status(201).json(user);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

    async generatePDF(req, res){
        try{
            const {firstName} = req.params;
            const user = await User.findOne({
                where: {
                    firstName: firstName
                },
                attributes: ['firstName', 'lastName', 'image']
            });
            if (!user){
                return res.json('False, user does not exist in DB');
            }
            const doc = new PDFGenerator();

            doc.pipe(fs.createWriteStream(`data/${user.firstName}_${user.lastName}.pdf`));
            doc.fontSize(15).text(`${user.firstName} ${user.lastName}`, {
                align: 'center'
            });

            doc.image(user.image, {
                fit: [300, 300]
            });
            doc.end();
            await User.update(
                { pdf: doc },
                { where: { firstName: firstName }});
            return res.json(true);
        } catch (error){
            return res.status(500).json({error: error.message});
        }
    }

}

module.exports = new UserController();