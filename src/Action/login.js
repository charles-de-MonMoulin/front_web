import axios from "axios";

export const handleLogin = (state) => {
    return axios.post('http://localhost:8000/api/token/', { username: state.username, password: state.password }).then(response => {
            localStorage.clear()
            window.localStorage.setItem('token', response.data.access);
            window.localStorage.setItem('refresh_token', response.data.refresh);
            localStorage.setItem('redirect', '/profil')
        }).catch(error => {
            if (error.response.status === 401 || error.response.status === 400) return {error: true};
        });
}