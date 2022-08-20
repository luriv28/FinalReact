import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);

  // const order = {
  //   buyer: {
  //     name: "Lucas",
  //     email: "lucasesteban.r@gmail.com",
  //     phone: "4444-4444",
  //     address: "Los Angeles",
  //   },
  //   cart,
  // };
  // total: totalPrice();

  // const handleClick = () => {
  //   const db = getFirestore();
  //   const ordersCollection = collection(db, "orders");
  //   addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  // };

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
        {/* <button onClick={handleClick}> Emitir compra</button> */}
        <button> Emitir compra</button>
      </Link>
    </>
  );
};

export default Cart;
