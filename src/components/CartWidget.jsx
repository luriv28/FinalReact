import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);
  return (
    <>
      <p className="numeroEnCarrito">{totalProducts() || ""}</p>
      <Link to="/cart">
        <AiFillShopping className="yellow" />
      </Link>
    </>
  );
};

export default CartWidget;
