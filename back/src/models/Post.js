const {DataTypes, UUIDV4} = require ('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Post', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    images: {
        type: DataTypes.TEXT,
        
    },
    description: {
        type: DataTypes.TEXT
    }

   },
   {timestamps: false}

   );
};