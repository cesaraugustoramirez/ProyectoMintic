const { request } = require('express');
const UserSchema = require('../models/user')


const getUser = async (req, res) => {
    if(typeof req.body != 'undefined')
    {
        try 
        {
            let usuario = await UserSchema.findById(req.body.id) ;    
            res.json({usuario})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se puede obtener el usuario'});


    }
}


const getUsers = async (req, res) => {
    if(typeof req.body != 'undefined')
    {
        try 
        {
            let usuarios = await UserSchema.find() ;    
            res.json({usuarios})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se pueden obtener los usuarios'});


    }
}

const createUser = async (req, res) => 
{
    if(typeof req.body != 'undefined')
    {
        console.log(console.log(req.body))
        let usuario = new UserSchema(req.body);
        try 
        {
            await usuario.save();    
            res.json({msg: 'Se ha creado el usuario ' + usuario.id})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se puede crear el usuario'});


    }

}

const updateUser = async (req, res) => {
    if(typeof req.body != 'undefined')
    {
        try 
        {
            await UserSchema.findOneAndUpdate(
                { _id: req.body.id },
                {
                    email: req.body.email,
                    rol: req.body.rol,
                    estado: req.body.estado
                }


            ) ;    
            res.json({msg: 'Se ha actualizado el usuario ' + req.body.id})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se puede actualizar el usuario, revisar los parámetros'});


    }
}

const deleteUser = async (req, res) => {
    if(typeof req.body != 'undefined')
    {
        try 
        {
            await UserSchema.findOneAndRemove(req.body.id) ;    
            res.json({msg: 'Se ha eliminado el usuario ' + req.body.id})
        } catch (error) 
        {
            console.log(error);
        }
    }
    else
    {
        res.json({msg: 'No se puede eliminar el usuario'});
    }
}

module.exports.getUser = getUser;
module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
