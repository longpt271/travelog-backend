'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tour.belongsTo(models.Diadiem),
        Tour.belongsToMany(models.User, {
          through: "Binhluans"
        }),
        Tour.belongsToMany(models.Dichvu, {
          through: "DichvuTours"
        }),
        Tour.belongsToMany(models.User, {
          through: "Hoadons"
        }),
        Tour.belongsToMany(models.Ngaydi, {
          through: "TourNgaydis"
        }),
        Tour.hasMany(models.Anh),
        Tour.belongsToMany(models.Loaitour, {
          through: "TourLoaitours"
        })
    }
  };
  Tour.init({
    name: DataTypes.STRING,
    diadiemId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Diadiem",
        key: "id"
      }
    },
    gianguoilon: DataTypes.INTEGER,
    giatreem: DataTypes.INTEGER,
    giaembe: DataTypes.INTEGER,
    trailer: DataTypes.STRING,
    chitiettour: DataTypes.STRING,
    luuy: DataTypes.STRING,
    bando: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};