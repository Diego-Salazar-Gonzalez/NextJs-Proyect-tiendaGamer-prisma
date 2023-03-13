import { useEffect } from "react";
import Layout from "@/components/Layout";
import useTienda from "@/hooks/useTienda";
import Image from "next/image";
import Paypal from "@/components/Paypal";
import { formatearDinero } from "@/helpers";
import { useRouter } from "next/router";

const comprar = () => {
  const { total, productosCarrito, handleAbrirCerrarCarrito, toggleCarrito } =
    useTienda();
  const router = useRouter();
  useEffect(() => {
    //cierra el carrito por si esta abierto porque no debe mostrarse el carrito en esta pag
    if (toggleCarrito) {
      handleAbrirCerrarCarrito();
    }
  }, []);

  return (
    <Layout title="Comprar" descripcion="Pagina de Compra Tienda Gamer">
      <div className="flex sm:flex-row flex-col  ">
        <div className="sm:w-2/3">
          <button
            className="text-white bg-slate-700 px-10 py-2 m-5 rounded-lg font-bold hover:text-red-600 "
            onClick={() => router.back()}
          >
            Atras
          </button>
          <h2 className="text-center font-black uppercase mb-10 text-xl">
            Tu Pedido
          </h2>
          {productosCarrito.map((producto) => (
            <div key={producto.id} className="flex sm:flex-row flex-col  items-center sm:items-start  sm:mx-10 my-5">
              <div className="w-1/3  m-5 ">
                <Image
                  width={300}
                  height={300}
                  src={`/img/${producto.imagen}.jpg`}
                  alt={`Imagen de Producto ${producto.nombre}`}
                />
              </div>
              <div className="w-2/3 ">
                <h3 className="font-bold">{producto.nombre}</h3>
                <p className="font-normal text-black">
                  {" "}
                  Cantidad:{" "}
                  <span className="font-bold text-red-600">
                    {producto.cantidad}
                  </span>
                </p>
                <p className="font-normal text-black">
                  {" "}
                  Subtotal:{" "}
                  <span className="font-bold text-red-600">
                    {formatearDinero(producto.Subtotal)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:w-1/3 z-0 m-3 border-black-500 border-2">
          <div className="m-5">
            <p className="m-5 font-bold">
              Total a Pagar:{" "}
              <span className="font-normal text-red-600">
                {formatearDinero(total)}
              </span>
            </p>
            <Paypal />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default comprar;
