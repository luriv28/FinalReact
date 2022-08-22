import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Item = ({ item, id }) => {
  return (
    <div className="item">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="item-img" variant="top" src={item.img} />

        <Card.Body>
          <Card.Title className="item-title">{item.name}</Card.Title>
          <Card.Text className="item-description">US$ {item.price}</Card.Text>

          <Card.Text className="item-description">{item.stock}</Card.Text>

          <Link to={`/item/${item.id}`} className="botonDetalle">
            <Button variant="danger">Detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
