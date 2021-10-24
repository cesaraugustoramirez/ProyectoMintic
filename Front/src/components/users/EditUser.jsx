import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { editUser, getPartialUser } from '../../services/UsersService';
import { useHistory, useParams } from 'react-router-dom';
import { verifyToken } from '../../services/AuthService'

const initialValue = {
    fullName: '',
    email: ''
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
    const { fullName, email} = usr;
    const classes = useStyles();
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        verifyToken();
        loadUserData();
    }, [])

    const loadUserData = async () => {
        let response = await getPartialUser(id);
        setUser(response.data.data);
    }

    const onValueChange = (e) => {
        setUser({ ...usr, [e.target.name]: e.target.value });
    }

/*    const onStateChange = (state) => {
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
                <Input onChange={(e) => onValueChange(e)} name="fullName" value={fullName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Correo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => updateUserData()} color="primary">Editar Usario</Button>
            </FormControl>
        </FormGroup>
    )
}
