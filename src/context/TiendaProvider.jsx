import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const TiendaContext = createContext();

const TiendaProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [productosVarios, setProductosVarios] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [categorias, setCategorias] = useState([]);
  const [isScroll, setIsScroll] = useState(false);
  const [toggleCarrito, setToggleCarrito] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [nombreUser,setNombreUser] = useState('')
  const [cantidadCarrito,setCantidadCarrito] = useState(0)

  const router = useRouter();

  //request Functions

  const ObtenerProductos = async () => {
    const { data } = await axios("/api/productos");
    setProductos(data);
  };

  const ObtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  const ObtenerTeclados = () => {
    //realiza un lista de todas las categorias disponibles(1 al 5 en este caso)
    const categorias = Array.from(new Set(productos.map((p) => p.categoriaId)));

    let resultados = [];
    //itera sobre cada categoria (1 al 5)
    categorias.forEach((categoria) => {
      //filtra por cada categoria y trae un arreglo en cada iteracion con sus respectivos productos
      const productosPorCategoria = productos.filter(
        (p) => p.categoriaId === categoria
      );
      //una vez que ha terminado de traer todos los productos de esa categoria extrae 2 de cada uno con la ayuda del array metod .slice y lo añade al nuevo arreglo llamado resultados con concat y lo guarda sobre la misma para que no se pierdan los datos
      resultados = resultados.concat(productosPorCategoria.slice(0, 2));
    });

    setProductosVarios(resultados);
  };

  //useEffects
  useEffect(()=>{
    //cierrta el burger modal para que no este abierto cuando cambia la pagina el usuario
    if(toggleModal){
      setToggleModal(false)
    }
  },[router.pathname])
  useEffect(() => {
    ObtenerCategorias();
  }, []);
  useEffect(() => {
    ObtenerProductos();
  }, []);
  useEffect(() => {
    ObtenerTeclados();
  }, [productos]);
  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);
  useEffect(() => {
    SumarDinero();
  }, [productosCarrito]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  useEffect(() =>{
    setCantidadCarrito(productosCarrito?.length)
  },[productosCarrito])
  useEffect(() => {
    if (productosCarrito?.length === 0) {
      let carritoSave = JSON.parse(
        localStorage.getItem("ProductosCarrito_TiendaGamer_v.1")
      );
      if(!carritoSave){
        carritoSave = []
      }
      setProductosCarrito(carritoSave);
     
    }
  }, []);

  //Handle Functions
  const handleResetarCarrito = () =>{
    localStorage.removeItem(
      "ProductosCarrito_TiendaGamer_v.1"
    );
    setProductosCarrito([])
  }

  const handleNombreUser = (nombre) =>{
    setNombreUser(nombre)
  }

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);

    setCategoriaActual(categoria[0]);

    router.push("/tienda");
  };

  const handleAgregarCarrito = (productoSeleccionado) => {
    if (
      productosCarrito.some((produc) => produc.id === productoSeleccionado.id)
    ) {
      const carritoActualizado = productosCarrito.map((product) =>
        product.id === productoSeleccionado.id ? productoSeleccionado : product
      );

      localStorage.setItem(
        "ProductosCarrito_TiendaGamer_v.1",
        JSON.stringify(carritoActualizado)
      );
      setProductosCarrito(carritoActualizado);
    } else {
      localStorage.setItem(
        "ProductosCarrito_TiendaGamer_v.1",
        JSON.stringify([...productosCarrito, productoSeleccionado])
      );
      setProductosCarrito([...productosCarrito, productoSeleccionado]);
    }
    toast.success("Producto Agregado!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  const handleProductoEliminar = (id) => {
    const productosActualizados = productosCarrito.filter(
      (producto) => producto.id !== id
    );
    localStorage.setItem(
      "ProductosCarrito_TiendaGamer_v.1",
      JSON.stringify(productosActualizados)
    );
    setProductosCarrito(productosActualizados);
    toast.success("Producto Eliminado!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  const handleAbrirCerrarCarrito = () => {
    setToggleCarrito(!toggleCarrito);
  };
  const handleChangeToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  const SumarDinero = () => {
    const totalDinero = productosCarrito?.reduce(
      (total, producto) => total + producto.Subtotal,
      0
    );
    setTotal(totalDinero);
  };

  return (
    <TiendaContext.Provider
      value={{
        productos,
        isScroll,
        productosVarios,
        toggleCarrito,
        handleAbrirCerrarCarrito,
        categorias,
        handleClickCategoria,
        categoriaActual,
        productosCarrito,
        handleAgregarCarrito,
        toggleModal,
        handleChangeToggleModal,
        total,
        SumarDinero,
        handleProductoEliminar,
        nombreUser,
        handleNombreUser,
        handleResetarCarrito,
        cantidadCarrito
      }}
    >
      {children}
    </TiendaContext.Provider>
  );
};

export { TiendaProvider };
export default TiendaContext;
