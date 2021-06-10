import axios from "axios";


export const GetProducts = (idProducer = null, url = null) => {
    console.log(idProducer);
    return axios.get(
        url!==null?url:('http://localhost:8000/products/' + (idProducer!==null?('?producer=' + idProducer): '')),
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('products', JSON.stringify(response.data))
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}