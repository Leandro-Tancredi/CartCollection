import React,{useContext} from "react";
import { Context } from "../Context/CartContext";

const CartItem = ({item}) => {
    const {clear, removeItem}=useContext(Context)
    
    return (  
    <>        
        <h1>{item.title}-{item.quantity}</h1>
        <button onClick={()=>removeItem(item.id)}>Borrar Producto</button>

    </>
);
}
 
export default CartItem;
