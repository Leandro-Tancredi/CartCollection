import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Boton = ({ Stock, initial, onAdd }) => {
    const [acumulador, setAcumulador] = useState(initial);
    const stock = Stock;

    const sumaProducto = () => {
        if (acumulador < stock) {
            setAcumulador(acumulador + 1);
        }
    }
    const restaProducto = () => {
        if (acumulador > 0) {
            setAcumulador(acumulador - 1);
        }
    }

    return (
        <div>
            <h3>{acumulador}<span>/Stock disponible {stock-acumulador}</span></h3>
           
            <div>
                <button disabled={acumulador <= 0} onClick={restaProducto} >
                    -</button>
               <Link to={`/cart`}>
                <span> <button disabled={acumulador > stock} onClick={() => { onAdd(acumulador) }}>Agregar al carrito</button> </span>
                </Link>
                 <button disabled={acumulador >= stock} onClick={sumaProducto}>
                    +</button>

            </div>
        </div>
    );
}
export default Boton;
