import axios from "axios";
import { authHeaders } from "./AuthService";

//const usersUrl = "https://peaceful-peak-03211.herokuapp.com/usuarios"; //prod
const usersUrl = "http://localhost:3001/usuarios";

export const createUser = async (user) => {
    return await axios.post(`${usersUrl}/`, user);
}

export const getUser = async (id) => {
    return await axios.get(`${usersUrl}/${id}`, { headers: authHeaders });
}

export const getUsers = async() => {
    return await axios.get(`${usersUrl}/`);
}


export const editUser = async (usr) => {
    return await axios.put(`${usersUrl}/${usr._id}`, usr, { headers: authHeaders });
}


