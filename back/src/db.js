
const { Sequelize } = require('sequelize');
require('dotenv').config({path:'./.env'})
const { USER, PORT, DBNAME, PASS} = process.env;

const sequelize = new Sequelize(`postgres://${USER}:${PASS}@${PORT}:5432/${DBNAME}`)

module.exports = {sequelize};