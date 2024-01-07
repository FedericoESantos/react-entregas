import React, { useState } from 'react'
import { useContext } from 'react';

const CartContext = React.createContext(""); // ESTO ES LA ETAPA 1
export const useCartContext = () => useContext(CartContext);
// con esto creo el contexto, lo exporto y con el hook useContext le digo que use el CartContext
// desde aquí empiezo a crear el componente donde creo la logica de mi contexto y lo transformo en proveedor

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); //creamos el hook useState con un array vacio
    // y a partir de aquí comenzamos a crear funciones

    const addProd = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === item.id
                        ? { ...product, quantity: product.quantity + quantity }
                        : product;
                })
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const totalProd = () =>
        cart.reduce(
            (acumulador, productoActual) => acumulador + productoActual.quantity,
            0
        );

    const clearCart = () => setCart([]);

    const isInCart = (id) =>
        cart.find((product) => product.id === id) ? true : false;

    const removeProd = (id) =>
        setCart(cart.filter((product) => product.id !== id));

    return ( //ESTO ES LA ETAPA 2
        <CartContext.Provider // aca creamos el provedor y con value={{ dentro van todas las funciones}}
            value={{ //el .Provider es una palabra reservada que transforma mi contexto en proveedor
                clearCart, // todas estas funciones serían mis childrencitos
                isInCart,
                removeProd,
                addProd,
                totalPrice,
                totalProd,
                cart, //no solo le paso las funciones sino tambien le paso el estado
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;


