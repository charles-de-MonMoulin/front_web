import axios from "axios";
import {GetAddress} from "./getAddress";

export const getCurrentUser = () => {
    return axios.get(
        'http://localhost:8000/user_app/current/',
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        window.localStorage.setItem('is_producer', response.data.is_producer);
        window.localStorage.setItem('username', response.data.username);
        window.localStorage.setItem('id', response.data.id);
        window.localStorage.setItem('first_name', response.data.first_name);
        window.localStorage.setItem('last_name', response.data.last_name);
        window.localStorage.setItem('email', response.data.email);
        window.localStorage.setItem('address', response.data.address);
        window.localStorage.setItem('image', response.data.image);
        window.localStorage.setItem('description', response.data.description);
        if (response.data.address) {
            GetAddress(localStorage.getItem('address')).then(r => {
            })
        }
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}