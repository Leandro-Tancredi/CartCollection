import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import Boton from "./itemCount";

const ItemDetailContainer = () => {

    const [Producto, setProducto] = useState(0);

    const getItem = async () => {

        const response = await fetch("./datos.json")
        const data = await response.json();
        setProducto(data)
    
    }
    useEffect(() => {

        setTimeout(() => { getItem() }, 1000)

    }, []);
    const onAdd = (valor) => {
        console.log(`usted compró ${valor} unidades`)
    }

    if (Producto === 0) {
        return (<h1>Loading...</h1>)
    }

    return (
        <> 
            <div className="container">
                <div className="row">
                    {Producto.map((Producto, index) => {
                        return (
                                <div className="col-md-3" key={index}>
                                    <ItemDetail Producto={Producto} />
                                    <Boton Stock={5} initial={0} onAdd={onAdd} />
                                </div>
                                )
                    })}
                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer;
