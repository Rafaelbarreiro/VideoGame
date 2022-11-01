const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey : true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //fecha de lanzamiento
    released: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      //revisar formato de number que trae la API
      type: DataTypes.FLOAT,
    },
    img: {
      type: DataTypes.STRING,  
      allowNull: true,    
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },{
    timestamps: false
  });
};
