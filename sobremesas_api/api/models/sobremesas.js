'use strict';
module.exports = (sequelize, DataTypes) => {
  const sobremesas = sequelize.define('Sobremesas', {
    nome: DataTypes.STRING,
    ingredientes: DataTypes.STRING,
    porcao: DataTypes.STRING,
    preco: DataTypes.STRING
  }, {});
  sobremesas.associate = function(models) {
    // associations can be defined here
  };
  return sobremesas;
};