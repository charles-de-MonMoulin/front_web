import axios from "axios";


export const GetImage = (id) => {
    return axios.get(
        'http://localhost:8000/images/' + id + '/',
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('image_url' + id, response.data.image)
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}