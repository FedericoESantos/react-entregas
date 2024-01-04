import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) { // si la longitud del estado de mi carrito es 0 no hay elementos agregados
        return (
            <>
                <p> No hay elementos en el carrito </p>
                <Link to="/"> Hacer compras </Link>
            </>
        );
    }

    return (
        <>
            {cart.map((prod) => (
                <ItemCart key={prod.id} product={prod} />
            ))}
            <p>total: $ {totalPrice()}</p>

            <Link to="/checkout">
                {' '}
                <button className="total">Finalizar Compra</button>
            </Link>
        </>
    );
};

export default Cart;