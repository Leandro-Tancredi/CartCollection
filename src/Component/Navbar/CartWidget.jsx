import React ,{ useContext} from "react";
import { Context } from "../Context/CartContext";

const CartWidget = () => {
    const {Carrito, Total}=useContext(Context)
   
    return (
        <>
            
            {Carrito.length>0 ?(
            <>
                <h6>{Carrito.length}</h6>
                <i className="ri-shopping-cart-line" />
            </>
            ):(<h1></h1>
            )}
        </>
    );
}
export default CartWidget;