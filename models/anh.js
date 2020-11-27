'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anh.belongsTo(models.Tour)
    }
  };
  Anh.init({
    link: DataTypes.STRING,
    tourId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tour",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Anh',
  });
  return Anh;
};