export const formatearDinero = (cantidad = 0) =>{
    return cantidad.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
}
