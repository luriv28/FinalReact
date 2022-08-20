import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Forms = () => {
  const { cart, totalPrice } = useContext(CartContext);

  const [form, setForm] = useState({
    direccion: "",
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const order = {
    buyer: {
      direccion: form.direccion,
      nombre: form.nombre,
      apellido: form.apellido,
      telefono: form.telefono,
      email: form.email,
    },
    cart,
    total: totalPrice(),
  };

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    // console.log(form.nombre + " " + " " + form.apellido + form.email);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  return (
    <>
      <div className="container mt-5 border solid  10px ">
        <h4>Formulario de envio</h4>
        <div className="title">Concreta tu compra!</div>
        <div className="subtitle mb-3 ">Ingresa tus datos</div>
        <form className="column" onSubmit={submitForm}>
          <div className="col-md-3">
            <input
              className="form-control mb-3"
              placeholder="Ingrese su direccion"
              type="text"
              name="direccion"
              onChange={handleInputChange}
              value={form.direccion}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control mb-3"
              placeholder="Ingrese su nombre"
              type="text"
              name="nombre"
              onChange={handleInputChange}
              value={form.nombre}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control mb-3 mb-3"
              placeholder="Ingrese su apellido"
              type="text"
              name="apellido"
              onChange={handleInputChange}
              value={form.apellido}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control mb-3 mb-3"
              placeholder="Ingrese su telefono"
              type="number"
              name="telefono"
              onChange={handleInputChange}
              value={form.telefono}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control mb-3 mb-3"
              placeholder="Ingrese su e-mail"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={form.email}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control mb-3 mb-3"
              placeholder="Confirme su e-mail"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={form.email}
              required
            />
          </div>
          <div className="col-md-3">
            <button
              onClick={submitForm}
              className="btn btn-primary mb-3"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
