import React, { useEffect, useState } from 'react' 
import { useContext } from 'react';

const CartContext = React.createContext(""); // ESTO ES LA ETAPA 1
export const useCartContext = () => useContext(CartContext);
// con esto creo el contexto, lo exporto y con el hook useContext le digo que use el CartContext
// desde aquí empiezo a crear el componente donde creo la logica de mi contexto y lo transformo en proveedor

const carritoInit = JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(carritoInit); //creamos el hook useState con un array vacio
    
    // y a partir de aquí comenzamos a crear funciones
    const addProd = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((prod) => {
                    return prod.id === item.id
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod;
                })
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
        localStorage.setItem();
    };

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const totalProd = () =>
        cart.reduce(
            (acumulador, productoActual) => acumulador + productoActual.quantity,
            0
        );

    const clearCart = () => {
        setCart([])
        localStorage.setItem();
    };

    const isInCart = (id) =>
        cart.find((product) => product.id === id) ? true : false;

    const removeProd = (id) =>
        setCart(cart.filter((product) => product.id !== id));

    useEffect(() =>{
        localStorage.setItem(".cart", JSON.stringify(cart))
    }, [cart]);

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


