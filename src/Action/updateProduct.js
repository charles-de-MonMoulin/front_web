import axios from "axios";


export const UpdateProduct = (id, formdata) => {
    return axios.put(
        'http://localhost:8000/products/' + id + '/',
        formdata,
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('actual_product', JSON.stringify(response.data))
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}