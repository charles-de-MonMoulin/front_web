import axios from "axios";

export const GetProducers = (url = '') => {
    return axios.get(
        url !== ''?url:'http://localhost:8000/user_app/?is_producer=true',
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('producers', JSON.stringify(response.data))
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}