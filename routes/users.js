var express = require('express');
var router = express.Router();
// const Sequelize = require('sequelize');
// const db = require('../config/db') 
// const User = require('../models/users')(db, Sequelize)

/* GET users listing. */
router.get('/', function(req, res, next) {
  // User.findAll()
  // .then(usersRes => {
  //   res.json(usersRes, 200);
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.json(err, 500);
  // });

  
  res.json(res);
});

module.exports = router;
