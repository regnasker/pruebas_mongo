const express = require('express');
const bodyParser = require('body-parser');

//inicaliza nuestra aplicación en express
const app = express();

//le indicamos en que puerto queremos que escuche
let port = 1234;

app.listen(port, () => {
    console.log('Server is up and runing on port number ' + port)
});