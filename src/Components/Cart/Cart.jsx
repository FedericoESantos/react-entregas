import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) { // si la longitud del estado de mi carrito es 0 no hay elementos agregados
        return (
            <div className='hacer-compras'>
                <p> No hay elementos en el carrito </p>
                <Link to="/"> Hacer compras </Link>
            </div>
        );
    }

    return (
        <div className='carrito'>
            {cart.map((prod) => (
                <ItemCart key={prod.id} product={prod} />
            ))}
            <p>Total: $ {totalPrice()}</p>

            <Link to="/checkout">
                {' '}
                <button className="total">Finalizar Compra</button>
            </Link>
        </div>
    );
};

export default Cart;