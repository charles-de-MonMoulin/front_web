import axios from "axios";


export const CreateOrder = (state) => {
    return axios.post('http://localhost:8000/orders/', {
        name: state.name,
        client: state.client,
    },{headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}).then(response => {
        return {response:response.data}
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}