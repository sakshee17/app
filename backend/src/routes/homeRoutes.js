const express = require('express');
const { getRoot } = require('../controllers/homeController');

const router = express.Router();

router.get('/', getRoot);

module.exports = router;
