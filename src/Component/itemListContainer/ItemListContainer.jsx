import React from "react";
import Boton from "./itemCount";
const ItemListContainer = ({ greeting }) => {
    const onAdd = (valor) => {
        console.log(`usted compró ${valor} unidades`);
    }
    return (<div>
        <h1 style={{ color: "blue" }}>
            {greeting}
        </h1>
        <Boton Stock={5} initial={0} onAdd={onAdd} />
    </div>
    )
}
export default ItemListContainer;
