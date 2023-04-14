const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.CHAR(3), //almacena datos de caracteres en un campo de longitud fija
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: true
    },
    region : {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital : {
      type: DataTypes.STRING,
      allowNull: true
    },
    subregion :{
      type: DataTypes.STRING,
      allowNull: true
    },
    area : {
      type: DataTypes.INTEGER
    },
    population : {
      type : DataTypes.INTEGER,
      allowNull: false
    }
  });
};
