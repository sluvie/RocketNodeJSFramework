const express = require('express');
const mainController = require('../controllers/main.controller')

const router = express.Router();

// index
router.route('/').get(
    mainController.getMainPage
);

router.route('/index').get(
    mainController.getMainPage
);

module.exports = router;