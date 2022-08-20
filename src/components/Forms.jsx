import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Forms = () => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const sendData = (event) => {
    event.preventDefault();
    console.log(data.nombre + " " + " " + data.apellido + data.email);
  };

  return (
    <>
      <div className="container mt-5 border solid  10px ">
        <h4>Formulario de envio</h4>
        <div className="title">Concreta tu compra!</div>
        <div className="subtitle mb-3 ">Ingresa tus datos</div>
        <form onSubmit={sendData} className="column">
          <div className="col-md-3">
            <input
              className="form-control mb-3"
              placeholder="Ingrese su nombre"
              type="text"
              name="nombre"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control mb-3 mb-3"
              placeholder="Ingrese su apellido"
              type="text"
              name="apellido"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control mb-3 mb-3"
              placeholder="Ingrese su telefono"
              type="number"
              name="telefono"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control mb-3 mb-3"
              placeholder="Ingrese su e-mail"
              type="email"
              name="email"
              onChange={handleInputChange}
              required={true}
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control mb-3 mb-3"
              placeholder="Confirme su e-mail"
              type="email"
              name="email"
              onChange={handleInputChange}
              required={true}
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary mb-3" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
