import React from "react";
import { useState } from "react";

const Boton = () => {
const [acumulador,setAcumulador]=useState(0);

return(
    <div> 
        <h3>{acumulador}</h3>
        <h3> servicio </h3>
            <div>
                <button onClick={()=>{setAcumulador(acumulador - 1) } }>                    
                -</button>
                <span> agregar al carrito </span>
                <button onClick={()=>{setAcumulador(acumulador + 1) }}>                    
                +</button>
            </div>
    </div>
);
} 
export default Boton;
