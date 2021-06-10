import axios from "axios";


export const GetOrderLines = (idOrder) => {
    return axios.get(
        'http://localhost:8000/order_line/?order=' + idOrder,
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('order_lines', JSON.stringify(response.data))
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}