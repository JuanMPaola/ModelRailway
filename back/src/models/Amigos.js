const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Amigos', {
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
    images:{
        type: DataTypes.TEXT,
        allowNull: false
    }
   },
   );
};