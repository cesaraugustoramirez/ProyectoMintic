const SaleSchema = require('../models/sale')
const getSales = (req, res) => {
    res.json({msg: "Todas las ventas"});
}

const createSale = (req, res) => {

}

const updateSale = (req, res) => {

}

const deleteSale = (req, res) => {

}

module.exports.getSales = getSales;
module.exports.createSale = createSale;
module.exports.updateSale = updateSale;
module.exports.deleteSale = deleteSale;
