import axios from "axios";


export const CreateOrderLine = (state) => {
    return axios.post(
        'http://localhost:8000/order_line/',
        {
            number: state.number,
            product: state.product,
            order: state.order
        },
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('order_lines', JSON.stringify(response.data))
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}