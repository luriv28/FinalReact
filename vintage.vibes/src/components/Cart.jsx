import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <p>Lo sentimos, tu carrito esta vacio 😥</p>
        <Link to="/"> Ir de compras</Link>
      </>
    );
  }
  return (
    <>
      {cart.map((item) => (
        <ItemCart key={item.id} item={item} />
      ))}
      <hr />
      <p className="totalCompra">Total compra: US$ {totalPrice()}</p>
      <Link to="/form">
        <button> Emitir compra</button>
      </Link>
    </>
  );
};

export default Cart;
