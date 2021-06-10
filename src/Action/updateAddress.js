import axios from "axios";


export const UpdateAddress = (state) => {
    return axios.put('http://localhost:8000/addresses/' + state.address + '/', {
        street: state.street,
        location: state.location,
        city: state.city,
        country: state.country,
        post_code: state.post_code,
    }, { headers: {"Authorization" : `Bearer ` + localStorage.getItem('token')} }).then(response => {
        localStorage.setItem('address', response.data.id)
        localStorage.setItem('city', response.data.city)
        localStorage.setItem('location', response.data.location)
        localStorage.setItem('street', response.data.street)
        localStorage.setItem('country', response.data.country)
        localStorage.setItem('post_code', response.data.post_code)
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}