const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
   sequelize.define('categori', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    images: {
        type: DataTypes.ARRAY,
        
    },
    description: {
        type: DataTypes.TEXT
    }

   })

}