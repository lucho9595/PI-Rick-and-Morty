const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
type: DataTypes.STRING,
allowNull: false
    },
    species: {
      type: DataType.ENUM,
      allowNull: false,
      value: ['Human', 'Alien']
    },
    origin: {
      type: DataType.STRING,
      allowNull: false
    },
    image: {
      type: DataType.STRING,
      allowNull: false
    },
    created: {
      type: DataType.DATE,
      allowNull: false
    }
  });
};
