const jwt = require("jsonwebtoken");
const { Sequelize } = require('sequelize');
const db = require('./../config/db');
const UserSessions = require('./../models/user_sessions').init(db, Sequelize);
// const User_permissions = require('./../models/users').init(db,Sequelize);



 const create_token = (user) => {
    const token = jwt.sign(user.dataValues, 'process.env.JWT_KEY', {expiresIn: '7d'});
       return UserSessions.create({
        user_id: user.dataValues.id,
        token: token,
        locked: false,
        _date: new Date(),
        active: true
      })
}


// module.exports = create_token
module.exports = { create_token };

