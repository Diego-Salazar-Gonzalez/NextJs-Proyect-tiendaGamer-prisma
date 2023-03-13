import { createContext } from "react"


const UsuarioContext = createContext()

const UsuarioProvider =({children}) =>{

    return(
        <UsuarioContext.Provider
            value={{}}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioProvider };
export default UsuarioContext;

