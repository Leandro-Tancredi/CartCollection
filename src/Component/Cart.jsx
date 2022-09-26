import React, {useContext, useState, useEffect} from "react";
import { Context } from "./Context/CartContext";
import CartItem from "./Navbar/CartItem";


const Cart=()=>{
    const {Carrito, clear, Total}=useContext(Context)
    const [precioTotal,setPrecioTotal]=useState(0);
    
    useEffect(()=>{
        setPrecioTotal(Total());
    },[Carrito]);
    
   
    return(
        <>
        {Carrito.length > 0 ? (<>
            {Carrito.map((element=><CartItem item={element}/>))}
            <h3>{precioTotal}</h3>
            <button onClick={clear}>Vaciar Carrito</button>
        </>)
        :(
        <h3>El Carrito se encuentra vacío</h3>
            )}
        </>
        )
    };
export default Cart;