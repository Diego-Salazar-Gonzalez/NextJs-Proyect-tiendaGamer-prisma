
import Layout from "@/components/Layout"
import { LockClosedIcon } from "@heroicons/react/20/solid";
const recuperar = () => {
  return (
    <>
      <Layout title="Login" descripcion="Pagina de Iniciar Sesion">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Recuperar Cuenta
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                O{" "}
                <a
                  href="/crear"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Crea Una
                </a>
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Correo
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                    placeholder="Correo"
                  />
                </div>
                
              </div>

              <div className="">
              

                <div className="text-sm">
                  <a
                    href="/login"
                    className="font-medium text-red-600 hover:text-red-500"
                  >
                    Iniciar Sesion
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-red-500 group-hover:text-red-400"
                      aria-hidden="true"
                    />
                  </span>
                  Enviar Correo
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default recuperar