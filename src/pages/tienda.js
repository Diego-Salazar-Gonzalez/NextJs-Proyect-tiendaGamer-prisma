import Layout from "@/components/Layout";
import useTienda from "@/hooks/useTienda";
import Categorias from "@/components/Categorias";
import ProductosActuales from "@/components/ProductosActuales";
import { useRouter } from "next/router";

const tienda = () => {
  const { categorias, categoriaActual } = useTienda();
  
  const router = useRouter();
  return (
    <Layout title="Tienda" descripcion="Pagina de Catalogo de Productos">
       <button
            className="text-white bg-slate-700 px-10 py-2 m-5 rounded-lg font-bold hover:text-red-600 "
            onClick={() => router.back()}
          >
            Atras
          </button>
      <p className="text-center font-black mt-2 text-2xl">Categorias</p>
      <nav className="flex flex-wrap gap-2 m-2 justify-center mt-5">
        {categorias.map((categoria) => (
          <Categorias key={categoria.id} categoria={categoria} />
        ))}
      </nav>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {categoriaActual?.prodcutos?.map((producto) => (
              <ProductosActuales key={producto.id} productos={producto} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default tienda;
