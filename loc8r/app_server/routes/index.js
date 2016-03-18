var express = require('express');
var router = express.Router();
var controller = require('../controllers/main')


var homePageController = function(req, res) {
    res.render('index', { title: 'Express' });
}

/* GET home page. */
router.get('/', controller.index);

module.exports = router;