const express = require('express');
const server = express();
const morgan = require('morgan');

server.use(express.json())
server.use(morgan('dev'))

server.get( '/categories', (req, res) => {
    res.send('Esta ruta trae las categorias')
})


server.get('/posts', (req, res) => {
    res.send('Esta ruta trae los posts')
})
server.get('/posts/:id', (req, res) => {
    const { id } = req.params;

    res.send('Esta ruta trae un post')
})



server.listen(3001, () =>{
    console.log('Server listen on port 3001')
});