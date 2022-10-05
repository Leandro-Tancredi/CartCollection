import React, {useContext, useState, useEffect} from "react";
import { Context } from "./Context/CartContext";
import CartItem from "./Navbar/CartItem";
import { Link } from "react-router-dom";

const Cart=()=>{
    const {Carrito, clear, Total}=useContext(Context)
    const [precioTotal,setPrecioTotal]=useState(0);
    
    useEffect(()=>{
        setPrecioTotal(Total());
    },[Carrito]);
    
   
    return(
        <>
        {Carrito.length > 0 ? (<>
            {Carrito.map((element,index)=><CartItem item={element} key={index} />)}
            <h3>{precioTotal}</h3>
            <button onClick={clear}>Vaciar Carrito</button>
        </>)
        :(
            <Link to={`/`}>
        <h3>El Carrito se encuentra vacío</h3>
        </Link> )}
        </>
        )
    };
export default Cart;