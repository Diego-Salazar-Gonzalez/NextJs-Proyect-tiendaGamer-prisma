import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import useTienda from "@/hooks/useTienda";
import Carrito from "./Carrito";
import { useRouter } from "next/router";
const Header = () => {
  const { isScroll, handleAbrirCerrarCarrito,cantidadCarrito } = useTienda();
  const router = useRouter();
  const urlNavegacion = [
    ["/", "Inicio"],
    ["/tienda", "Tienda"],
    ["/contacto", "Contacto"],
  ];

  const handleCarrito = (e) => {
    e.preventDefault();
    handleAbrirCerrarCarrito();
  };

  return (
    <>
      <div className="sm:hidden" id="outer-container">
        <BurgerMenu />
      </div>
      <Carrito />
      <header
        className={`  w-full bg-black ${
          isScroll ? "sticky" : ""
        } top-0   z-10 shadow `}
      >
        <nav
          className="flex items-center space-x-4 mx-5 sm:justify-between justify-end "
          id="page-wrap"
        >
          <Image
            width={100}
            height={30}
            src={"/img/logo.png"}
            alt="Imagen Logotipo"
            priority
            className=""
          />
          <div className=" sm:flex hidden justify-between w-full items-center">
            <div>
              {urlNavegacion.map(([url, title]) => (
                <Link
                  key={url}
                  href={url}
                  className=" rounded-lg font-bold px-3 py-2 text-white  hover:bg-slate-100 hover:text-slate-900"
                >
                  {title}
                </Link>
              ))}
            </div>

            
          </div>
          <div >
             
              {router.pathname !== "/comprar" && (
                <button
                  href={"#"}
                  onClick={handleCarrito}
                  className="rounded-lg px-3 py-2 text-white font-bold hover:bg-slate-100 hover:text-slate-900 flex"
                > 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <p className="">{cantidadCarrito}</p>
                </button>
              )}

              {/* <Link
                href={"/login"}
                className="rounded-lg px-3 py-2 text-white font-bold hover:bg-slate-100 hover:text-slate-900"
              >
                Log In
              </Link>

              <Link
                href={"/registro"}
                className="rounded-lg px-3 py-2 text-white font-bold hover:bg-slate-100 hover:text-slate-900"
              >
                Registrar
              </Link> */}
            </div>
        </nav>

        {/* <nav className="flex sm:justify-center space-x-4">
        <div className="">
            <Link href='/'>Inicio</Link>
            <Link href='/Tienda'>Tienda</Link>
            <Link href='/Contacto'>Contacto</Link>
            <Link href='/Blog'>Blog</Link>
        </div>

        <div>
        <Link href='/login'>Log In</Link>
        <Link href='/registrar'>Registrar</Link>
        <Link href='/carrito'>Carrito</Link>

        </div>
      </nav> */}
      </header>
    </>
  );
};

export default Header;
