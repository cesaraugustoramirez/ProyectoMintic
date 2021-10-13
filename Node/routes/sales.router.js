const { Router } = require('express');
const router = Router();
const { salesController } = require('../controllers');

router.get('/', salesController.getSales);

router.post('/', salesController.createSale);

router.put('/', salesController.updateSale);

router.delete('/',salesController.deleteSale);

module.exports = router;