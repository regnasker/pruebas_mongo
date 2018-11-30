const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creamos un nuevo esquema, traducido a mongo es una colección.
let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true}
});

//Exportamos el modelo.
module.exports = mongoose.model('Product', ProductSchema);