const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    descripcion: String,
    valorunitario: Number,
    estado: String
})

module.exports = mongoose.model('products', ProductSchema);