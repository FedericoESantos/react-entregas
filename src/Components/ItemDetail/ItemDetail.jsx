import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({item}) => { //empezamos a generar toda la card en descripcion
    const[goToCart, setGoToCart] = useState(false);
    const {addProd} = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProd(item, quantity);
    }

    return (
        <div>
            <div className="item-detail">
                <img src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>$ {item.price}</p>
                <p> Cantidad: {item.stock}</p>
            </div>
            <div className="term">
                {goToCart ? <Link to="/cart" className="terminarCom"> Terminar Compra </Link> : <ItemCount stock={10} initial={1} onAdd={onAdd} />}
                <Link to="/" className="terminarCom"> Seguir comprando </Link>
            </div>
        </div>
    )
}

export default ItemDetail