import axios from "axios";


export const UpdateOrder = (state) => {
    return axios.put('http://localhost:8000/orders/' + state.id + '/', {
        name: state.name,
        client: state.client,
    }, {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}).then(response => {
        return {response:response.data}
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}