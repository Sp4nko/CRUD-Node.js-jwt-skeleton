const jwt = require("jsonwebtoken");
const { Sequelize } = require('sequelize');
const db = require('./../config/database');
const UserSessions = require('./../model/user_sessions').init(db, Sequelize);
const User_permissions = require('./../model/user').init(db,Sequelize);



export const create_token = (user) => {
    const token = jwt.sign(user.dataValues, process.env.JWT_KEY, {expiresIn: '7d'});
       return UserSessions.create({
        user_id: user.dataValues.id,
        token: token,
        locked: false,
        _date: new Date(),
        active: true
      })
}
