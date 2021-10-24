import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { editUser, getUser } from '../../services/UsersService';
import { useHistory, useParams } from 'react-router-dom';
import { verifyToken } from '../../services/AuthService'

const initialValue = {
    fullName: '',
    email: '',
    password: '',
    date: ''
}

const useStyles = makeStyles({
    container: {
        width: '30%',
        margin: '100px auto 0 auto',
        '& > *': {
            marginTop: 20
        }
    }
})

export function EditUser() {
    const [usr, setUser] = useState(initialValue);
    const { fullName, email,password, date} = usr;
    const classes = useStyles();
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        verifyToken();
        loadUserData();
    }, [])

    const loadUserData = async () => {
        let response = await getUser(id);
        console.log("loaduserdata", response);
        setUser(response.data.data);
    }

    const onValueChange = (e) => {
        console.log("onvaluechange", e);
        setUser({ ...usr, [e.target.fullName]: e.target.email });
    }

   /* const onStateChange = (state) => {
        setProduct({ ...usr, "estado": state });
    }
*/
    const updateUserData = async () => {
        await editUser(usr);
        history.push('/usuarios');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Editar Usuario</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="nombre" value={fullName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Correo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="correo" value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => updateUserData()} color="primary">Editar Usario</Button>
            </FormControl>
        </FormGroup>
    )
}
