import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [Producto, setProducto] = useState({});

    /*const getItem = async () => {
        const response = await fetch("/datos.json")
        const data = await response.json();
        setProducto(data[id])
    }*/

    useEffect(() => {
        const db= getFirestore();
        const items= collection(db,"items");
        getDocs(items).then((snapshot)=>{
           const docs= snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
           }))
           setProducto(docs);
        })
        //getItem();

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










