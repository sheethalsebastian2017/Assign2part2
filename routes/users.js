/*File Name; users.js
  Author; Sheethal Sebastian, Amal Baiju, Manu Cheriyan
  Website Name; survey site
  Description; Site structure
  */
 var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;