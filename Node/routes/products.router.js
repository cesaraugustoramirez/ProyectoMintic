/*importando el modulo Router de express para definir las rutas
del crud de productos*/
const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
/*importando el controlador de los productos, encargado de gestionar
la interaccion entre las peticiones HTTP y la base de datos*/
const { productsController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', verifyToken, productsController.getProduct);

router.get('/', productsController.getProducts);

//escribiendo las reglas que deben cumplir los parametros para crear un producto
router.post('/',
    body('valorunitario', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , verifyToken, productsController.createProduct);

//escribiendo las reglas que deben cumplir los parametros para actualizar un producto               
router.put('/:id',
    body('valorunitario', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , verifyToken, productsController.updateProduct);

router.delete('/:id', verifyToken, productsController.deleteProduct);

module.exports = router;