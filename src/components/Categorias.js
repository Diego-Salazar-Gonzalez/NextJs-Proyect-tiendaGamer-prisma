import useTienda from "@/hooks/useTienda";
import React from "react";

const Categorias = ({ categoria }) => {
    const {handleClickCategoria,categoriaActual} = useTienda()
  const { nombre, id } = categoria;
  
 
  return (
    <div className="flex ">
      <button type="button" className={`text-white bg-slate-700 px-5 py-2 rounded-lg font-bold hover:text-red-600  ${categoriaActual?.id === id ? 'text-red-600' : ''}`}
        onClick={() =>handleClickCategoria(id)}
      >
        {nombre}
      </button>

      
    </div>
  );
};

export default Categorias;
