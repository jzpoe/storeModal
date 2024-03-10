import axios from "axios";


const instance = axios.create({
    baseURL: 'https://store-modal-back-52f4xmzoy-jzpoe.vercel.app/' // Aquí defines tu URL base
  });
  
  export default instance;

