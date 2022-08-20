import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const rest = () => {
    if (count > initial) setCount(count - 1);
  };
  const sum = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <>
      <div className="contador">
        <div className="boton-contador">
          <Button variant="outline-primary" onClick={rest}>
            -
          </Button>
          <p className="numeroContador"> {count} </p>
          <Button variant="outline-primary" onClick={sum}>
            +
          </Button>
        </div>

        <div>
          <Button
            variant="outline-primary"
            style={{ marginTop: "1rem" }}
            className="add-btn"
            onClick={() => onAdd(count)}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
