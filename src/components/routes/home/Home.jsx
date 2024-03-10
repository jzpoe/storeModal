
import rutaGet from "../../rutas/Rutaget";
import { useEffect, useState } from "react";

export const Home = () => {
  const [imagenestore, setImagenestore] = useState([]);

  useEffect(() => {
    const fetchImages = async () =>{
      const response = await rutaGet()
      setImagenestore(response)
    }

    fetchImages();

  }, []);

  return (
    <div>
      <h1>Imágenes</h1>
      <div>
        {/* Verificar si imagenestore es un array antes de mapearlo */}
        {Array.isArray(imagenestore) && imagenestore.map((imagen, index) => (
<img key={index} src={imagen.fieldname} alt={`Imagen ${index}`} />
        ))}
      </div>
    </div>
  );
};