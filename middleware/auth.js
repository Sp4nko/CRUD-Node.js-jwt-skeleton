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

const verify_token = (req, res, next) => {

    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(403).send("Access denied. {auth}");

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};



// module.exports = create_token
module.exports = { create_token, verify_token };

