import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc } from "firebase/firestore"; 

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
      const querydb = getFirestore(); //asi inicializamos Firestore y lo almacenamos en una variable    
      const queryDoc = doc(querydb, "prod", id );
      getDoc(queryDoc).then((res)=>
      setItem({id: res.id, ...res.data()}))

  }, [id]) //el id es el mismo nombre que ponemos cuando usamos useParams

  return (
    <div>
      <div>
        <ItemDetail item={item}/>
      </div>
    </div>
  )
}

export default ItemDetailContainer;