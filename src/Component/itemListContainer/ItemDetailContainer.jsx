import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const { id } = useParams()

    const [Producto, setProducto] = useState(0);

    const getItem = async () => {
        const response = await fetch("/datos.json")
        const data = await response.json();
        setProducto(data[id])
    }

    useEffect(() => {

        getItem();

    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className="row fuente justify-content-center">
                    <div className="col-md-3 "  >
                        <ItemDetail producto={Producto} />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetailContainer;










