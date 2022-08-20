import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
// import products from "../mock/products";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

//Pasos para traer datos de firebase
//1- traer el servicio de firestore
//2- crear un puntero al dato que queremos traer
//3- traer el dato con una promesa

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  // const TraerItemPorId = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(products.find((obj) => obj.id === id));
  //     }, 500);
  //   });
  // };

  // useEffect(() => {
  //   TraerItemPorId().then((response) => {
  //     setItem(response);
  //   });
  // }, []);

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", id);
    getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
