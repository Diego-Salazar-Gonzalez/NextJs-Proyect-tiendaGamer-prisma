import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import useTienda from "@/hooks/useTienda";
import { useRouter } from "next/router";
const Paypal = () => {

    const {total,handleNombreUser,handleResetarCarrito} = useTienda()
    const router = useRouter()
  return (
    <>
      <PayPalScriptProvider  options={{ "client-id": "AWXSeCw7mBz1jIgaQ0mvj0L1V74AlUSAXcHY2CSc5hLcNXj4i2tyhGmCr3LDwzqolnYZQDwM-JxOPykK" }}>
      <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total.toFixed(2).toString(),
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        handleNombreUser(details.payer.name.given_name);
                        handleResetarCarrito()
                        router.push('/agradecimientos-compra')
                    });
                }}
                
            />
      </PayPalScriptProvider>

      
    </>
  );
};

export default Paypal;
