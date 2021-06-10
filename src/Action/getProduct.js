import axios from "axios";


export const GetProduct = (id) => {
    return axios.get(
        'http://localhost:8000/products/' + id + '/',
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('products', JSON.stringify(response.data))
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}