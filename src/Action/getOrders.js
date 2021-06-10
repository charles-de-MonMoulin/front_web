import axios from "axios";


export const GetOrders = (idClient) => {
    return axios.get(
        'http://localhost:8000/orders/?client=' + idClient,
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('orders', JSON.stringify(response.data))
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}