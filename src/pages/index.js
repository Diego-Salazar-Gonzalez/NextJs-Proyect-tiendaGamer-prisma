import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import useTienda from "@/hooks/useTienda";
import Productos from "@/components/Productos";


import { Swiper, SwiperSlide } from "swiper/react";
import { formatearDinero } from "@/helpers";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home({ children }) {
  const { productos, productosVarios } = useTienda();





  //Imagenes
  const backgroundImage = {
    backgroundImage: `url(${"/img/background.jpg"})`,
  };
  const backgroundWallpaper = {
    backgroundImage: `url(${"/img/wallpaper-background.jpg"})`,
  };

  return (
    <Layout title="Inicio" descripcion="pagina de inicio">
      <div className=" bg-cover bg-no-repeat " style={backgroundImage}>
        <div className="flex justify-center items-center h-screen container m-0">
          <div className="grid gap-2 justify-items-center">
            <h1 className="font-black text-xl text-white text-center uppercase">
              Tienda Virtual De Componentes Gamer
            </h1>
            <Link
              href={"/tienda"}
              className="bg-rose-700 hover:bg-rose-500 transition-colors duration-300 text-white font-bold uppercase rounded-full px-5 py-2 text-center w-5/12"
            >
              Tienda
            </Link>
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mx-8 h-80"
      >
        {productos.map((producto) => (
          <SwiperSlide key={producto.id} className="">
            <a href="#">
              <div className="flex justify-center items-center">
                <div className="w-80">
                  <img src={`./img/${producto.imagen}.jpg`}></img>
                </div>

                <div className="m-1 w-auto ">
                  <h2 className="font-mono font-bold  text-center">
                    {producto.nombre}
                  </h2>
                  <p className="font-black text-red-600">
                    {formatearDinero(producto.precio)}
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Productos</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Productos productos={productosVarios} />
          </div>
        </div>
      </div>

      <div
        className="my-5 bg-cover bg-no-repeat "
        style={backgroundWallpaper}
      >
        <div className="flex justify-center items-center h-screen container text-center m-0">
          <p className="font-black text-white uppercase w-96 text-3xl">
            Hola Gamer!!! Bienvenido a nuestra tienda donde encontraras muchas
            cosas de tus videojuegos favoritos a un muy buen precio
          </p>
        </div>
      </div>
    </Layout>
  );
}
