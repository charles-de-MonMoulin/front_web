import axios from "axios";


export const UpdatePicture = (formData) => {
    return axios.put(
        'http://localhost:8000/images/' + localStorage.getItem('image') + '/',
        formData,
        {headers: {"Authorization": `Bearer ` + localStorage.getItem('token')}}
    ).then(response => {
        localStorage.setItem('image_actual', response.data.id)
        localStorage.setItem('image_url_actual', response.data.image)
    }).catch(error => {
        if (error.response.status === 401) return {error: true};
    });
}