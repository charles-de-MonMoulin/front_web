import axios from "axios";


export const GetProducer = (id) => {
    return axios.get(
        'http://localhost:8000/user_app/' + id + '/',
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('actual_producer', JSON.stringify(response.data))
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}