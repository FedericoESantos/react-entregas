import { useCartContext } from '../Context/CartContext';
// aca podemos darle un estilo

const ItemCart = (prod) => {
    const {removeProd} = useCartContext();
    return (
        <div className="itemCart">
            <img src={prod.img} alt={prod.title} />
            <div>
                <p>Título: {prod.title}</p>
                <p>Cantidad: {prod.quantity}</p>
                <p>Precio u.: {prod.price}</p>
                <p>Subtotal: $ {prod.quantity * prod.price}</p>
                <button onClick={() => removeProd(prod.id)}> Eliminar</button>
            </div>
        </div>
    );
};

export default ItemCart;