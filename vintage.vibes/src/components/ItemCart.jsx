import React from "react";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
const ItemCart = ({ item }) => {
  const { removeProduct } = useContext(CartContext);
  return (
    <div className="itemCart">
      <img className="itemCartImg" src={item.img} alt={item.name} />
      <div>
        <p>Nombre: {item.name} </p>
        <p>Cantidad: {item.cantidad}</p>
        <p>Precio u.: US$ {item.price}</p>
        <p>Subtotal: US$ {item.cantidad * item.price} </p>
        <button onClick={() => removeProduct(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ItemCart;
