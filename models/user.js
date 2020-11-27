'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: "UserRoles"
      }),
        User.belongsToMany(models.Tour, {
          through: "Hoadons"
        }),
        User.belongsToMany(models.Tour, {
          through: "Binhluans"
        })
    }
  };
  User.init({
    name: DataTypes.STRING,
    gioitinh: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    diachi: DataTypes.STRING,
    sdt: DataTypes.STRING,
    ngaysinh: DataTypes.DATE,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};