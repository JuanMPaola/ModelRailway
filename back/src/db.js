const { Sequelize } = require('sequelize');
const CategoriModel = require('./models/Categori');
const PostModel = require('./models/Post');
const AmigosModel = require('./models/Amigos');

require('dotenv').config()
const { USER, PORT, DBNAME, PASS} = process.env;


const sequelize = new Sequelize(
    `postgres://${USER}:${PASS}@${PORT}:5432/${DBNAME}`,
    {logging:false}
);


// Injecting models

CategoriModel(sequelize);
PostModel(sequelize);
AmigosModel(sequelize);

// Creating relations

const { Post, Categori, Amigos} = sequelize.models;


Categori.hasMany(Post);
Post.belongsTo(Categori);

module.exports = {
    ...sequelize.models,
    sequelize,
    Categori,
    Post,
    Amigos

};