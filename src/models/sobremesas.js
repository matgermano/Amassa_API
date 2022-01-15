'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sobremesas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sobremesas.init({
    nome: DataTypes.STRING,
    ingredientes: DataTypes.STRING,
    porcao: DataTypes.STRING,
    preco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sobremesas',
  });
  return sobremesas;
};