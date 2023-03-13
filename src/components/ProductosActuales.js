import { formatearDinero } from "@/helpers";
import Link from "next/link";
const ProductosActuales = ({ productos }) => {
  const { nombre, imagen, precio } = productos;
  return (
    <Link href={`/productos/${nombre}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={`img/${imagen}.jpg`}
          alt={`Imagen de ${nombre}`}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{nombre}</h3>

      <p className="mt-1 text-lg font-medium text-gray-900">
        {formatearDinero(precio)}
      </p>
    </Link>
  );
};

export default ProductosActuales;
