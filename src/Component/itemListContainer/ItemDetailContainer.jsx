import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [Producto, setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const ref = doc(db, 'items', id);
        getDoc(ref).then((snapshot) => {
            const doc = snapshot.data()
            setProducto(doc);
        })
    },[id])

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










