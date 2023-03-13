import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title = "?", descripcion = "" }) => {
  const titulo = `TiendaGamer - ${title}`;
  return (
    <>
      <Head>
        <title>{titulo}</title>
        <meta name="description" content={descripcion}></meta>
        <link rel="shortcut icon" href="/img/pixelLink.png"></link>
      </Head>

      <Header />
      {children}
      <Footer title={title} />
      <ToastContainer/>
    </>
  );
};

export default Layout;
