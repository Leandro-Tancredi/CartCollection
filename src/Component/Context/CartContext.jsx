import React,{ createContext } from "react";
import { useState } from "react";

export const Context = createContext();

const CartContext = ({children}) => {

    const [Carrito, setCarrito]= useState([]);

    const addItem=(producto, quantity)=>{
        const productoAnterior = isInCart(producto.id)
        
        if (productoAnterior) {
            const arreglo= Carrito.filter((e)=>e.id !== producto.id)
            producto.quantity=quantity+productoAnterior.quantity;
            arreglo.push(producto)
            setCarrito(arreglo);        
        }else{
        producto.quantity=quantity;
        setCarrito([...Carrito, producto]);
        }
    }
      
      const isInCart=(productoId)=>{
       return(Carrito.find((e)=> e.id === productoId) 
      )}

      const clear=()=>{
        setCarrito([]);
      }
      const removeItem=(productoId)=>{
        setCarrito(Carrito.filter((e)=>e.id !== productoId))
      }
      const Total=()=>{
        let tot=0
        Carrito.forEach((Carrito) => {
          tot=tot + Carrito.price * Carrito.quantity
        });
        return(tot)
      }
    return (
        <Context.Provider value={{addItem, Carrito, clear, removeItem, Total}}>
            {children}
        </Context.Provider>


  );
}
 

export default CartContext;