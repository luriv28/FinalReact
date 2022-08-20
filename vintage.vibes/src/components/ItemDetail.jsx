import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);

  const { addToCart } = useContext(CartContext); //aca llamo a la funcion creada en cartContext.

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(item, cantidad); //aca vamos a pasar 2 parametros, la info del prod y  la cantidad
  };

  return (
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={item.img} className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
          <h4>{item.name}</h4>

          <h3 style={{ color: "red" }}>US$ {item.price}</h3>
          <p>{item.description}</p>

          {cantidad === 0 ? (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          ) : (
            <Link to="/Cart">Go to shop cart!</Link>
          )}
          <br />
          <Link to="/">Continue shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
