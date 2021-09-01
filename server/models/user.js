'use strict';
const { Model } = require('sequelize');
// let sequelize = new Sequelize('', 'keefedashiell', 'password', {
//   dialect: postgres
// })
// unlocking_wellness

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
    providers: DataTypes.JSONB,
    photo: DataTypes.STRING,
    services: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};