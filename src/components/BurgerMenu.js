import { bubble as Menu } from "react-burger-menu";
import Link from "next/link";
import useTienda from "@/hooks/useTienda";
import { useState } from "react";

const BurgerMenu = () => {
  
  const {
    handleAbrirCerrarCarrito,
    toggleModal,
    handleChangeToggleModal,
  } = useTienda(); 
  const urlNavegacion = [
    ["/", "Inicio"],
    ["/tienda", "Tienda"],
    ["/contacto", "Contacto"],
    // ["/login", "Login"],
    // ["/registro", "Registrar"],
  ];

  const handleCarrito = (e) => {
    e.preventDefault();
    handleAbrirCerrarCarrito();
  };

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
      right: "0px",
    },
    bmBurgerBars: {
      background: "#fff",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <div className={`block`}>
      <Menu styles={styles} isOpen={toggleModal} onOpen={handleChangeToggleModal} onClose={handleChangeToggleModal}>
        <div>
          <div className={` flex flex-col`}>
            
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
      </Menu>
    </div>
  );
};

export default BurgerMenu;
