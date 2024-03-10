import axios from "../axios/axiosConfig"

 const Rutaget = async () => {

    try {
        const response = await axios.get("/upload/imagenes")
        console.log('respuesta del servidor', response.data)
        return response.data

    } catch (error) {
        console.error('Error al obtener el objeto:', error);
        throw error; // Propaga el error para que pueda ser capturado en el componente que llama a esta función.
    }
}

export default Rutaget