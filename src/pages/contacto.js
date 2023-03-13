import Layout from "@/components/Layout";
import Mapa from "@/components/Mapa";

import React from "react";
 
const contacto = () => {
  return (
    <Layout title="Contacto" descripcion="Pagina de Contacto Tienda Gamer">
      <div className="h-screen flex justify-center align-center mt-14 mx-5  flex-col">
        <h1 className="ml-5 mb-5 font-bold text-xl">
          Visitanos a Nuestra Tienda Fisica Siempre Seras Bienvenido
        </h1>
        <Mapa />
        <div className="flex gap-5 mt-5">
          <div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                  clipRule="evenodd"
                />
              </svg>

              <h2>Contacto</h2>
            </div>
            <p className="font-bold">Telefono: <span className="font-normal">0982345345</span></p>
            <p  className="font-bold">Email: <span className="hover:text-red-600	cursor-pointer font-normal">tiendagamer@gmail.com</span></p>
          </div>
          <div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>

              <h2>Direccion</h2>
            </div>
            <p>Av.Colon y Arcelia Guzman</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contacto;
