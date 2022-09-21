import React, {useContext} from "react";
import { Context } from "./Context/CartContext";
import CartItem from "./Navbar/CartItem";


const Cart=()=>{
    const {Carrito, clear}=useContext(Context)

    return(
        <>
            {Carrito.map((element=><CartItem item={element}/>))}
            <button onClick={clear}>Vaciar Carrito</button>
        </>
    )
}
export default Cart;