const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Categori', {
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
    postsActivos:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
   },
    {timestamps: false}
   );
};