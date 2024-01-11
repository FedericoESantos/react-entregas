import { useState } from "react"
import { useCartContext } from "../Context/CartContext"
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';

export const CheckOut = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');


    const { cart, totalPrice, removeProd } = useCartContext();

    const manejadorFormulario = (event) => {
        event.preventDefault();


        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Por favor complete todos los campos requeridos');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los email no coinciden');
            return;
        }


        const total = totalPrice();
        const orden = {
            items: cart.map((prod) => ({
                id: prod.id,
                nombre: prod.title,
                cantidad: prod.quantity,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const db = getFirestore();
                const productoRef = doc(db, 'prod', productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                const db = getFirestore();
                addDoc(collection(db, 'orders'), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        removeProd();
                    })
                    .catch((error) => {
                        console.log('No se pudo crear la orden', error);
                        setError('Error en la orden');
                    });
            })
            .catch((error) => {
                console.log('No se puede actualizar el stock', error);
                setError('No se actualizo el stock');
            });

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailConfirmacion('');

    };
    return (
        <div className="formulario">
            <img src="../../../public/images/logo.png" alt="logo" />
            <h2> Complete el formulario para confirmar su compra... </h2>
            <form onSubmit={manejadorFormulario}>

                {cart.map((prod) => (
                    <div key={prod.id} className="item-cart">
                        <img src={prod.img} alt={prod.title} />
                        <p>{''} {prod.title}</p>
                        <p>Cantidad: {prod.quantity}</p>
                        <p>Precio u.: $ {prod.price}</p>
                        <p>Precio Total.: $ {prod.price * prod.quantity}</p>
                    </div>
                ))}

                <div className="info">
                    <label className="lab-check"> Nombre:</label>
                    <input className="input-check" placeholder="complete su nombre"  type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="info">
                    <label className="lab-check"> Apellido:</label>
                    <input className="input-check" placeholder="complete su apellido" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}
                    />
                </div>

                <div className="info">
                    <label className="lab-check"> Telefono:</label>
                    <input className="input-check" placeholder="complete su telefono" type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>

                <div className="info">
                    <label className="lab-check"> Email:</label>
                    <input className="input-check" placeholder="complete su email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="info">
                    <label className="lab-check"> Confirmar email</label>
                    <input className="input-check" placeholder="repita su email" type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}
                    />
                </div>


                {error && <p>{error}</p>}
                {ordenId && (
                    <div className="gracias">
                        <p> ¡Gracias por tu compra FLASH!</p>
                        <p>Tu numero de seguimiento es: <br /> {''} {ordenId} {''} <br /></p>
                    </div>
                    
                )}
                <div>
                    <button className="enviar" type="submit"> Enviar </button>
                </div>
            </form>
        </div>
    );
}