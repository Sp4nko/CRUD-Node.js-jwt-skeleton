const { Sequelize  } = require('sequelize');
// const User = require('./user') 


class User_permissions extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          permission_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
        }, {
          // Other model options go here
          sequelize, // We need to pass the connection instance
          modelName: 'User_permissions', // We need to choose the model name
          tableName: 'user_permissions',
          createdAt: 'created_at',
           updatedAt: 'updated_at'
        });
      }
}


//  User_permissions.associate = function(models) {
//     //   Users.hasMany(models.customer_query, {
//     //     foreignKey: 'user_id',
//     //     as: 'user_id'
//     // });
//     User_permissions.belongsTo(User, {foreignKey: 'user_id'});
  
//     }

module.exports = User_permissions;

