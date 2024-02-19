const app = require('./src/app/app');
const { sequelize } = require('./src/db');
const port = 3001;



app.listen(port, () =>{
    sequelize.sync({force: true});
    console.log(`Server listen on ${port}`);
});