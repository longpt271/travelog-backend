'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tintuc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tintuc.belongsToMany(models.Tag, {
        through: "TintucTags"
      })
    }
  };
  Tintuc.init({
    name: DataTypes.STRING,
    tomtat: DataTypes.STRING,
    content: DataTypes.STRING,
    tacgia: DataTypes.STRING,
    anh: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitch: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tintuc',
  });
  return Tintuc;
};