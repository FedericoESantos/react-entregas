import {useCartContext} from '../Context/CartContext';

const CartWidgets = () => {
    const {totalProd, cart} = useCartContext();
    return ( //o me mostras el total de los productos o me mostras el estado del carrito
    <div className="cart"> 
        <button>
            <img src="/public/images/carrito.png" alt="carrito" height={50} /> 
            <span className='valor'> { totalProd() || cart}  </span>
        </button>
    </div>
    );
};

export default CartWidgets;