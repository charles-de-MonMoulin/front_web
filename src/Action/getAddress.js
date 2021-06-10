import axios from "axios";


export const GetAddress = (id) => {
    return axios.get(
        'http://localhost:8000/addresses/' + id + '/',
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('city', response.data.city)
        localStorage.setItem('location', response.data.location)
        localStorage.setItem('street', response.data.street)
        localStorage.setItem('country', response.data.country)
        localStorage.setItem('post_code', response.data.post_code)
        return response.data
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}