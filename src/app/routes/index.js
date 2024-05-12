const express = require('express');
const router = express.Router();

// list of routes
const mainRouter = require('./main.routes');

// controler
router.use(mainRouter);

module.exports = router;