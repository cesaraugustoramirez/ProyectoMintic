const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    descripcion: String,
    valorunitario: Number,
    estado: Boolean
})

module.exports = mongoose.model('products', ProductSchema);