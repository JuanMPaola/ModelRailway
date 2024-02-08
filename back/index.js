const express = require('express');
const server = express();

server.get( '/categories', (req, res) => {
    res.send('Esta ruta trae las categorias')
})
server.get('/posts',  (req, res) => {
    res.send('Esta ruta trae los posts')
})



server.listen(3001, () =>{
    console.log('Server listen on port 3001')
});