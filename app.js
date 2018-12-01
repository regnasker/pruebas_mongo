const express = require('express');
const bodyParser = require('body-parser');

//inicaliza nuestra aplicación en express
const product = require('./routes/product.route'); // Importamos la ruta de los productos
const app = express();

app.use('/products', product);

//le indicamos en que puerto queremos que escuche
let port = 4000;

app.listen(port, () => {
    console.log('Server is up and runing on port number ' + port)
});