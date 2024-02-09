const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require("../routes/index")

app.use(express.json())
app.use(morgan('dev'))
app.use('/', router)


app.get( '/categories', (req, res) => {
    res.send('Esta ruta trae las categorias')
})

module.exports = app;