import axios from "axios";

export const CreatePicture = (formData) => {

    return axios.post(
        'http://localhost:8000/images/',
        formData,
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('image_actual', response.data.id)
        localStorage.setItem('image_url_actual', response.data.image)
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}