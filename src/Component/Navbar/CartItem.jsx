import { addDoc, getFirestore, collection } from "firebase/firestore";
import React,{useContext, useState} from "react";
import { Context } from "../Context/CartContext";

const CartItem = ({item}) => {
    const {clear, removeItem}=useContext(Context)
    const [form, setForm]= useState({
        name:"",
        email:"",
        phone:""
   });

    const changeHandler=(event)=>{
       const newForm={...form, [event.target.name]: event.target.value};
       setForm(newForm);
      
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const db = getFirestore();
        const contactFormCollection=collection(db, "contactForm");
        addDoc(contactFormCollection, form).then((snapshot)=> console.log(snapshot.id))
    }
    return (  
    <>        
        <h1>{item.title}-{item.quantity}</h1>
        <button onClick={()=>removeItem(item.id)}>Borrar Producto</button>
        <form onSubmit={submitHandler}>
        <div className="row justify-content-center">
        <div className="col-sm-4 mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
            <input name="name" className="form-control text-center" id="exampleFormControlInput1" placeholder=""
             onChange={changeHandler}
             value={form.name}
             />
        </div></div>
        <div className="row justify-content-center">
        <div className="col-sm-4 mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
            <input name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
               value={form.email} onChange={changeHandler}/>
        </div></div>
        <div className="row justify-content-center">
        <div className="col-sm-4 mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">Teléfono</label>
            <input name="phone" className="form-control" id="exampleFormControlInput1" placeholder=""
               value={form.phone}onChange={changeHandler}/>
        </div></div>
        <div className="row justify-content-center">
        <div className="col-sm-4 mb-3 ">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensage</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
             name="mensage"   value={form.mensage} onChange={changeHandler}></textarea>
        </div></div>
        <div className="row justify-content-center">
        <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3"
            >Confirmar</button>
        </div></div>
        </form>
    </>
);
}
 
export default CartItem;
