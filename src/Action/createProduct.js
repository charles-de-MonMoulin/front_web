import axios from "axios";


export const CreateProduct = (formdata) => {
    return axios.post(
        'http://localhost:8000/products/',
        formdata,
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('actual_product', JSON.stringify(response.data))
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}