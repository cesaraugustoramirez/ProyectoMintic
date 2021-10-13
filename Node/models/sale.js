const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleSchema = Schema({
    valor: Number,
    fecha: Date,
    documentoCliente: Number,
    nombreCliente: String,
    documentoVendedor: Number
    
})

module.exports = mongoose.model('sales', SaleSchema);