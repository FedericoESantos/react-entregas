import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"; 
//el where y el query nos sirve para hacer el filtrado
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    const [item, setItem] = useState([]); //se inicializa en un array vacio porque se va a completar con el Json de los productos
    const {id} = useParams(); // por convencion siempre se usa el nombre id

    useEffect(()=>{ // aca tengo que traer la colleccion inicializarla y traer los productos
        const querydb = getFirestore(); //asi inicializamos Firestore y lo almacenamos en una variable    
        const queryColl = collection(querydb, "prod" ); // 2 parametros que se me inicialice y de donde. Produ es el nombre 
                                      // que cree desde Firebase y lo almaceno en otra constante
                                      // segundo paso le tengo que indicar a travez de collection que es lo que 
                                      // quiero que me traiga
        // ahora viene la condición
        if(id){ // si existe el id
            const queryFilter = query(queryColl, where("categoryId", "==", id));
            // traeme de ... query collection ... y el where indica que es lo que tenes que filtrar
            getDocs(queryFilter).then((res)=> // con esto le indico que quiero obtener del documento y lo captura con una promesa
            setItem(res.docs.map((p)=>({id: p.id, ...p.data() }))) // lo seteo para que sea vea por pantalla y que de mi res me mapee cada docs
            ); 
         // el where quiero que me filtre por categoryId, que sea igual a (==) al id
          // y como todo esto lo voy a necesitar la voy a englobar en una constante
        } else{
        getDocs(queryColl).then((res)=> // con esto le indico que quiero obtener del documento y lo captura con una promesa
        setItem(res.docs.map((p)=>({id: p.id, ...p.data() }))) // lo seteo para que sea vea por pantalla y que de mi res me mapee cada docs
        );
    }
    }, [id]) //el id es el mismo nombre que ponemos cuando usamos useParams

    return ( // aca empezamos a hacer el mapeo pero la ejecutamos del ItemList y aca lo importamos
        <div className="card-container">
            <ItemList item={item} />
        </div>
    )
}

export default ItemListContainer;
