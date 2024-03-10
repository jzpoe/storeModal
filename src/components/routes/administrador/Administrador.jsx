

import { useState } from "react";
import axiosConfig from "../../axios/axiosConfig";


export const Administrador = () => {
  const [post, setPost] = useState({
    title: "",
    photo: null,
  });

  const [archivo, setArchivo] = useState(null);

  const subidaImage = async (e) => {
    const archivoSubido = e.target.files[0];

    if (archivoSubido) {
      const filename = archivoSubido.name.toLowerCase();

      // solo archivos jpg
      if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) {
        setArchivo(archivoSubido); // si es jpg guardamos la imagen en el estado archivo
      } else {
        console.log("Sube un archivo correcto");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!archivo) {
      console.log("Sube un archivo");
    } else {
      const formData = new FormData();
      formData.append("file", archivo);

      // enviar imagen al servidor
      await 
      axiosConfig.post("/imagenes", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          
        })

        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("Éxito");
          } else {
            console.log("Error");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Cargar foto</label>
      <br />
      <label>Título</label>
      <input
        type="text"
        name="title"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <input type="file" name="file" id="formFile" onChange={subidaImage} />
      <button type="submit">Subir foto</button>
    </form>
  );
};