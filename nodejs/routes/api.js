const express = require('express');

const router = express.Router()


const apiController = require('../controllers/api')

router.get('/getuser',apiController.getUser);

module.exports = router;