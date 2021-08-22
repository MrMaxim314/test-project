require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const UserRouter = require('./router/UserRouter');
const fileUpload = require('express-fileupload');

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use('/', UserRouter);

app.get('/', ((req, res) => {
    res.send('Test');
}));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));