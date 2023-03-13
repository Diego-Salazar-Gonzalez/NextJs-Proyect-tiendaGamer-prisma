import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useTienda from "@/hooks/useTienda";
import { formatearDinero } from "@/helpers";
import Layout from "@/components/Layout";

const ProductoIndividual = () => {
  const { productos, handleAgregarCarrito } = useTienda();
  const router = useRouter();
  const { url } = router.query;

  const [producto, setProducto] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [Subtotal, setSubtotal] = useState(0);
 
  let id,nombre, precio, imagen, descripcion;

  if (producto.length > 0) {
    ({ id,nombre, precio, imagen, descripcion } = producto[0]); //() par evitar errores
  }

  useEffect(() => {
    setSubtotal(precio * cantidad);
  }, [cantidad]);
  useEffect(() =>{
    setSubtotal(precio)
  },[precio])

  useEffect(() => {
    const ObtenerProducto = () => {
      const Producto = productos.filter((produc) => produc.nombre === url);

      setProducto(Producto);
      setSubtotal(precio); //para que cargue el subtotal inicial que es el precio del producto
    };
    ObtenerProducto();
  }, [productos]);

  return (
    <>
      {producto.length > 0 && (
        <Layout
          title={`${nombre}`}
          descripcion={`Pagina del Producto: ${nombre}`}
          
        >
          <button
            className="text-white bg-slate-700 px-10 py-2 m-5 rounded-lg font-bold hover:text-red-600 "
            onClick={() => router.back()}
          >
            Atras
          </button>

          <div className="grid sm:flex gap-4 mx-5  justify-center items-center mt-5 sm:h-screen">
            <div className="w-full">
              <img src={`/img/${imagen}.jpg`} alt={nombre} />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="font-bold uppercase">{nombre}</h1>
              <p className="font-bold">
                Descripcion: <span className="font-normal">{descripcion}</span>
              </p>
              <p className="font-bold text-3xl text-red-600 text-center">
                {formatearDinero(precio)}
              </p>
              <div className="flex gap-2">
                <p className="font-bold">Cantidad: </p>
                <button
                  onClick={() => {
                    if (cantidad <= 1) return;

                    setCantidad(cantidad - 1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <p className="text-red-600">{cantidad}</p>

                <button
                  onClick={() => {
                    if (cantidad >= 5) return;
                    setCantidad(cantidad + 1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <p className="font-bold">
                Subtotal:{" "}
                <span className="font-normal">{formatearDinero(Subtotal)}</span>
              </p>
              <div className="flex mt-5 ">
                <button
                  className="bg-slate-800 font-bold text-white py-2 px-5 rounded-lg"
                  onClick={() => handleAgregarCarrito({id,nombre,precio,cantidad,Subtotal,imagen})}
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default ProductoIndividual;
