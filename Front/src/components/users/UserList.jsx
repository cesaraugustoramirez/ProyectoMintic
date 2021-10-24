import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { getUsers} from '../../services/UsersService';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../../services/AuthService';

const useStyles = makeStyles({
    table: {
        width: '50%',
        margin: '1% auto 0 auto'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    },
    button: {
        marginInline: '20px'
    },
    button_add: {
        textAlign: "right"
    }
})

export function UserList() {
    const classes = useStyles();

    const [user, setUser] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
        setUser(getCurrentUser());
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers();
        console.log(response.data.data);
        setUsers(response.data.data);
    }

 /*   const deleteProductData = async (id) => {
        let callbackUser = window.confirm('Esta seguro de elimar el producto?');
        if (callbackUser) {
            await deleteProduct(id);
            getAllProducts();
        }
    }*/

    return (
        <>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Nombre Usuario</TableCell>
                        <TableCell>Correo</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(usr => (
                            <TableRow className={classes.row} key={usr._id}>
                                <TableCell>{usr._id}</TableCell>
                                <TableCell>{usr.fullName}</TableCell>
                                <TableCell>{usr.email}</TableCell>
                                {user
                                    &&

                                    (<TableCell>
                                        <Button className={classes.button} variant="contained" component={Link} to={`usuarios/editar/${usr._id}`} color="default">Editar</Button>
                                    </TableCell>)
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}