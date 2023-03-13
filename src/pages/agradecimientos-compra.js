import useTienda from "@/hooks/useTienda";
import Layout from "@/components/Layout";
import visto from "../../public/img/visto.png";
import Image from "next/image";
const agradecimientos = () => {
  const { nombreUser } = useTienda();
  return (
    <Layout
      title="agradecimientos"
      descripcion="pagina de agradecimientos por tu compra"
    >
      <div className="flex flex-col items-center justify-center h-full mt-32 mb-32">
        <div className="w-32 m-5">
          <Image
            width={300}
            height={300}
            src={visto}
            alt={"Imagen de visto verde"}
          />
        </div>

        <div>
          <h2 className="font-bold text-2xl">Gracias por su compra {nombreUser}</h2>
          <p className="text-xl">Compra Realizada Correctamente</p>
        </div>
      </div>
    </Layout>
  );
};

export default agradecimientos;
