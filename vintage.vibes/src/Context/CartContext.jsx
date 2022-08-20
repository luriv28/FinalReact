//1er paso. Crear contexto
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

//si o si necesito tener un componente, para crear un estado. No puedo crear un estado suelto.

//2do paso. Creo mi componente como una capa de abstraccion y llamamos a los children en app.js para poder visualizar nuevamente en pantalla los componentes
const Provider = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  //aca abajo entre () recibo los parametros que envio desde addtocart en ItemDetail, con los nombres que yo quiera

  const addToCart = (item, cantidad) => {
    let newCart;
    let product = cart.find((product) => product.id === item.id);
    if (isInCart(item.id)) {
      product.cantidad += cantidad;
      newCart = [...cart];
    } else {
      product = { ...item, cantidad };
      newCart = [...cart, product];
    }
    setCart(newCart);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const clearCart = () => setCart([]);

  const totalPrice = () => {
    //prev es un acumulador aca tambien
    return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.cantidad,
      0
    );

  const removeProduct = (id) => setCart(cart.filter((item) => item.id !== id));

  //si en value paso solo una prop, van {}, si paso 2 o mas va {{}}
  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearCart,

        removeProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
//a traves del value voy a poder pasar parametros a mis hijos

//el provider va a ser el que envuelva toda la aplicacion
export default Provider;
