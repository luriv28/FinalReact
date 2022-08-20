import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item, id) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
