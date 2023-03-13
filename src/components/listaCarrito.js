import Image from "next/image";
import { formatearDinero } from "@/helpers";
import { useState, useEffect } from "react";
import useTienda from "@/hooks/useTienda";
const ListaCarrito = () => {
  const { productosCarrito, handleAgregarCarrito, handleProductoEliminar } =
    useTienda();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let carritoSave = JSON.parse(
      localStorage.getItem("ProductosCarrito_TiendaGamer_v.1")
    );
    if (carritoSave) {
      setCart(carritoSave);
      return;
    }
  }, [productosCarrito]);

  const handleRestarCantidad = (product) => {
    if (product.cantidad <= 1) return;
    product.cantidad = product.cantidad - 1;
    product.Subtotal = product.cantidad * product.precio;
    handleAgregarCarrito(product);
  };
  const handleSumarCantidad = (product) => {
    if (product.cantidad >= 5) return;
    product.cantidad = product.cantidad + 1;
    product.Subtotal = product.cantidad * product.precio;
    handleAgregarCarrito(product);
  };

  return (
    <>
      {cart?.map((product) => (
        <div key={product.nombre}>
          <div className="flex justify-end mt-5">
            <button onClick={() => handleProductoEliminar(product.id)}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex">
            <div className="w-1/3">
              <Image
                width={100}
                height={200}
                alt={`Imagende ${product.nombre}`}
                src={`/img/${product.imagen}.jpg`}
              />
            </div>

            <div className="w-2/3">
              <p className="font-thin">{product.nombre}</p>
              <div className="flex gap-6">
                <div>
                  <div className="flex gap-2">
                    <p className="font-bold">Cantidad: </p>
                    <button
                      onClick={() => {
                        handleRestarCantidad(product);
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
                    <p className="text-red-600">{product.cantidad}</p>

                    <button
                      onClick={() => {
                        handleSumarCantidad(product);
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
                </div>
                <p className="font-bold">{formatearDinero(product.Subtotal)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListaCarrito;
