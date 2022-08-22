import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const mySwal = withReactContent(Swal);
  let newDate = new Date();

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
    date:
      String(newDate.getDate()).padStart(2, "0") +
      "/" +
      String(newDate.getMonth() + 1).padStart(2, "0") +
      "/" +
      newDate.getFullYear(),
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

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((res) => {
        mySwal.fire({
          icon: "success",
          text: `Compra Finalizada! Su numero de orden es # ${res.id}.

          El importe total es de US$ ${totalPrice()}.
          
          El pedido sera enviado a la siguiente direccion: ${form.direccion} `,
        });
        clearCart();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
              id="email"
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
              id="emailConfirmacion"
              placeholder="Confirme su e-mail"
              type="emailConfirmacion"
              name="emailConfirmacion"
              onChange={handleInputChange}
              value={form.email}
              required
            />
          </div>
          <div className="col-md-3">
            <Link to="/categories/cuadro">
              <button
                onClick={submitForm}
                className="btn btn-primary mb-3"
                type="submit"
              >
                Finalizar compra
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
