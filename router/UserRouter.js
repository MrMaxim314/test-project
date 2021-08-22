const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get('/list', UserController.getAll);
router.post('/add', UserController.addUser);
router.get('/generate/:firstName', UserController.generatePDF);

module.exports = router;