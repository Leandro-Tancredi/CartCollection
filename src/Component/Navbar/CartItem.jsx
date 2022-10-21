import { addDoc, getFirestore, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Context } from "../Context/CartContext";


const CartItem = ({ item }) => {
    const { removeItem } = useContext(Context)
    const [orderId, setOrderId] =useState("")
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [order, setOrder] = useState({
        total:"",
        title: "",
        price: ""
    });

    const changeHandler = (event) => {
        const newForm = { ...form, [event.target.name]: event.target.value };
        setForm(newForm);
        const newOrder={...{
        title: `${item.title}`,
        price: `${item.price}`}};
        setOrder(newOrder)

    }
    const submitHandler = (event) => {
        event.preventDefault();
        const db = getFirestore();
        const contactFormCollection = collection(db, "contactForm");
        addDoc(contactFormCollection, form).then((snapshot) => console.log(snapshot.id))
        const orderCollection = collection(db, "order");
        addDoc(orderCollection, order).then((snapshot) => {setOrderId(snapshot.id)})
    }
 
  

    return (<>
        {orderId==="" ? (
        <>
            <h1>{item.title}-{item.quantity}</h1> 
            <button onClick={() => removeItem(item.id)}>Borrar Producto</button>
            <form onSubmit={submitHandler}>
                <div className="row justify-content-center">
                    <div className="col-sm-4 mb-3 ">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                        <input name="name" className="form-control text-center" id="exampleFormControlInput1" placeholder=""
                            onChange={changeHandler}
                            value={form.name}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4 mb-3 ">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                        <input name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                            value={form.email} onChange={changeHandler} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4 mb-3 ">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Teléfono</label>
                        <input name="phone" className="form-control" id="exampleFormControlInput1" placeholder=""
                            value={form.phone} onChange={changeHandler} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3"
                        >Confirmar</button>
                    </div>
                </div>
            </form>
        </>
    ):( 
    <h2>tu compra es la numero {orderId}</h2>
    )}
</>)
    }
export default CartItem;
