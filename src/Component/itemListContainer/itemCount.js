import React from "react";
import { useState } from "react";

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
            <h3>{acumulador}</h3>
            <div>
                <button disabled={acumulador <= 0} onClick={restaProducto} >
                    -</button>
                <span> <button disabled={acumulador > stock} onClick={() => { onAdd(acumulador) }}>Agregar al carrito</button> </span>
                <button disabled={acumulador >= stock} onClick={sumaProducto}>
                    +</button>

            </div>
        </div>
    );
}
export default Boton;
