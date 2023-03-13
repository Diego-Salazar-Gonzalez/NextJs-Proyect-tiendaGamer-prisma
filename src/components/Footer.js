import Link from "next/link";
import Image from "next/image";
import Mapa from "./Mapa";
const Footer = ({ title }) => {
  const urlNavegacion = [
    ["/", "Incio"],
    ["/tienda", "Tienda"],
    ["/contacto", "Contacto"],
    ["/blog", "Blog"],
  ];

  return (
    <>
      <footer className="bg-black">
        {title === "Inicio" ? (
          <div className="pt-3 mx-3">
            <p className="text-white font-semibold my-3 ">
              Visitanos en nuestra tienda fisica:
            </p>
            <Mapa />
          </div>
        ) : (
          ""
        )}

        <nav>
          <div className="flex  justify-center my-2">
            <Image
              width={100}
              height={30}
              src={"/img/logo.png"}
              alt="Imagen Logotipo"
            />
          </div>
          <div className="sm:flex justify-between w-full">
            <div className="flex justify-between px-2">
              {urlNavegacion.map(([url, title]) => (
                <Link
                  key={url}
                  href={url}
                  className="rounded-lg font-bold px-3 py-2 text-white  hover:bg-slate-100 hover:text-slate-900"
                >
                  {title}
                </Link>
              ))}
            </div>
            <p className="text-white font-bold text-center mt-5 mr-5">
              Todos los derechos Reservados {new Date().getFullYear()}
            </p>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
