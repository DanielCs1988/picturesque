import axios from 'axios';

const pictureApi = axios.create({
    baseURL: 'https://picturesque-repository.herokuapp.com/pictures'
});

export default pictureApi;