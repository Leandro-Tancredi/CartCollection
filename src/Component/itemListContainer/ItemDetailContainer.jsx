import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import Boton from "./itemCount";

const ItemDetailContainer = () => {

    const [Producto, setProducto] = useState(0);

    const getItem = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=tarot/0`)
            const data = await response.json();
            setProducto(data.results[10])


        } catch (e) {
            console.log(`error ${e}`);
        }
    }

    useEffect(() => {

        setTimeout(() => { getItem() }, 2000)

    }

        , []);
    const onAdd = (valor) => {
        console.log(`usted compró ${valor} unidades`)
    }

    if (Producto === 0) {
        return (<h1>Loading...</h1>)
    }

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <div >
                            <ItemDetail Producto={Producto} />
                            <Boton Stock={5} initial={0} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer;
