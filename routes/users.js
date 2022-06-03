var express = require('express');
const {
  where
} = require('sequelize');
var router = express.Router();
const Sequelize = require('sequelize');
const db = require('../config/db')
const User = require('../models/users')(db, Sequelize)

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.findAll()
    .then(usersRes => {
      res.json(usersRes, 200);
    })
    .catch(err => {
      console.log(err);
      res.json(err, 500);
    });



});

/* GET user by id. */
router.get('/:id', function (req, res, next) {
  User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(usersRes => {
      res.status(200).json(usersRes);
    })
    .catch(err => {
      console.log(err);
      res.json(err, 500);
    });
});


//creating user by POST METHOD
router.post('/insertUser', (req, res) => {
  User.create({
      first_name: req.body.fname,
      last_name: req.body.lname,
      email: req.body.email,
      password: req.body.password,
      active: 1
    })
    .then(function (result) {
      res.json(result);
    });
})

//updating user by PUT METHOD
router.put('/update/:id', (req, res) => {
 User.findByPk(req.body.id).then(function (result) {
  User.update({
      first_name: req.body.fname
    
  }, {where: {id: req.params.id}}).then((result) => {
    res.json(result)
  })
    });
  
})

//delete user by id
router.delete('/delete/:id', (req, res) => {
User.findByPk(req.params.id)
.then((result) => {
  result.destroy();
res.json(result)
})
})

module.exports = router;