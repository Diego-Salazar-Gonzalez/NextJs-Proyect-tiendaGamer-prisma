import React from "react";
import { formatearDinero } from "@/helpers";




const Productos = ({productos}) => {
  

  return (
    <>


      
        {productos.map((producto) => (
           
          <a key={producto.id} href={`/productos/${producto.nombre}`} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={`./img/${producto.imagen}.jpg`}
                alt={`Imagen del Producto ${producto.nombre}`}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4  text-black ">{producto.nombre}</h3>
            <p className="mt-1 text-lg font-medium text-red-700">
              {formatearDinero(producto.precio)}
            </p>
          </a>
          
        ))}
     
    </>
  );
};

export default Productos;
