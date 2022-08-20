import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import products from "../mock/products";
import ItemList from "./ItemList";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const handleClick = () => {
    alert("Proximamente podras visualizar todas nuestras novedades");
  };

  const [items, setItems] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    // const queryFilter = query(
    //   queryCollection,
    //   where("categoria", "==", category)
    // );
    if (category) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", category)
      );
      getDocs(queryFilter).then((res) =>
        setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setItems(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    }
  }, [category]);
  // console.log(items);
  //la informacion de lo que se resuelve en la promesa me llega por parametro, y le pongo el nombre que quiera -info-

  return (
    <>
      <div>
        <a href="/" className="contenedorItemList">
          <h3 onClick={() => handleClick()}>{greeting}</h3>
        </a>
        <h3 className="container-titulo">Vibes</h3>
        <ItemList items={items} />
      </div>
    </>
  );
};
export default ItemListContainer;
