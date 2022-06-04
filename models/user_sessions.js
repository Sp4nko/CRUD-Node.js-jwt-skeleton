const { Sequelize  } = require('sequelize');

class UserSessions extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            locked: {
            type: DataTypes.BOOLEAN,
            allowNull: false
          },
          _date: {
            type: DataTypes.DATE,
            allowNull: false
          },
          token: {
            type: DataTypes.STRING,
            allowNull: false
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          active: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        }
        }, {
          // Other model options go here
          sequelize, // We need to pass the connection instance
          modelName: 'UserSessions', // We need to choose the model name
          tableName: 'user_sessions',
          createdAt: 'created_at',
          updatedAt:'updatedAt'
        });
      }
}

module.exports = UserSessions;
