const { request } = require('express');
const ProductSchema = require('../models/product')


const getProduct = async (req, res) => {
    if(typeof req.body != 'undefined')
    {
        try 
        {
            let producto = await ProductSchema.findById(req.body.id) ;    
            res.json({producto})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se puede obtener el producto'});


    }
}


const getProducts = async (req, res) => {
    if(typeof req.body != 'undefined')
    {
        try 
        {
            let productos = await ProductSchema.find() ;    
            res.json({productos})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se pueden obtener los productos'});


    }
}

const createProduct = async (req, res) => 
{
    if(typeof req.body != 'undefined')
    {
        console.log(console.log(req.body))
        let product = new ProductSchema(req.body);
        try 
        {
            await product.save();    
            res.json({msg: 'Se ha creado el producto ' + product.id})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se puede crear el producto'});


    }

}

const updateProduct = async (req, res) => {
    if(typeof req.body != 'undefined')
    {
        try 
        {
            await ProductSchema.findOneAndUpdate(
                { _id: req.body.id },
                {
                    valorunitario: req.body.valorunitario,
                    descripcion: req.body.descripcion,
                    estado: req.body.estado
                }


            ) ;    
            res.json({msg: 'Se ha actualizado el producto ' + req.body.id})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se puede actualizar el producto, revisar los parámetros'});


    }
}

const deleteProduct = async (req, res) => {
    if(typeof req.body != 'undefined')
    {
        try 
        {
            await ProductSchema.findOneAndRemove(req.body.id) ;    
            res.json({msg: 'Se ha eliminado el producto ' + req.body.id})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se puede eliminar el producto'});


    }
}

module.exports.getProduct = getProduct;
module.exports.getProducts = getProducts;
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
