
import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item.jsx";
import Boton from "./itemCount.js";
const ItemList = () => {
    const [productos, setProductos] = useState([]);

    const buscarProductos = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=tarot`)
            const data = await response.json();
            setProductos(data.results);

        } catch (e) {
            console.log(`error ${e}`);
        }
    }

    useEffect(() => {
        buscarProductos()

    }, []);
    const onAdd = (valor) => {
        console.log(`usted compró ${valor} unidades`);
    }
    return (
        <div>
            {productos.map((productos, index) => {
                return (
                    <div className="row">
                        <div className="col-md-3">
                            <div key={index}>
                                <Item producto={productos} />
                                <Boton Stock={5} initial={0} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>)
            })}


        </div>
    )
};





export default ItemList;