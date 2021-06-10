import axios from "axios";


export const CreateUser = (state) => {
    return axios.post('http://localhost:8000/user_app/', {
        username: state.username,
        email: state.email,
        password: state.password,
        first_name: state.first_name,
        last_name: state.last_name,
        is_producer: state.is_producer
    }).then(response => {
        return {error:false}
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}