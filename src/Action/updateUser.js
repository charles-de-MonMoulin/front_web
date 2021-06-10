import axios from "axios";


export const updateUser = (state) => {
    return axios.put('http://localhost:8000/user_app/' + state.id + '/', {
        username: state.username,
        email: state.email,
        first_name: state.first_name,
        last_name: state.last_name,
        address: state.address === "null"?null: state.address,
        image: state.image === "null"?null: state.image
    }, { headers: {"Authorization" : `Bearer ` + localStorage.getItem('token')} }).then(response => {
            window.localStorage.setItem('is_producer', response.data.is_producer);
            window.localStorage.setItem('username', response.data.username);
            window.localStorage.setItem('id', response.data.id);
            window.localStorage.setItem('first_name', response.data.first_name);
            window.localStorage.setItem('last_name', response.data.last_name);
            window.localStorage.setItem('email', response.data.email);
            window.localStorage.setItem('address', response.data.address);
            window.localStorage.setItem('image', response.data.image);
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}