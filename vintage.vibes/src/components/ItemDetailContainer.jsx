import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loader from "./Loader/Loader";

//Pasos para traer datos de firebase
//1- traer el servicio de firestore
//2- crear un puntero al dato que queremos traer
//3- traer el dato con una promesa

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", id);
    getDoc(queryDoc).then((res) =>
      setItem({
        id: res.id,
        ...res.data(),
      })
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [id]);

  return <>{loading ? <Loader /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
