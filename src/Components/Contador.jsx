import { useState } from "react"
import { Link } from 'react-router-dom';

const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <div className="contador">
                <button className="calculo" onClick={() => setContador(contador - 1)}> - </button>
                <label htmlFor=""> <p className="num-cont"> {contador} </p> </label>
                <button className="calculo" onClick={() => setContador(contador + 1)}> + </button>
            </div>

            <div>
                <div className="agregar">
                <button className="carrito"> Agregar al Carrito  </button>
                    <Link to='/'><button> Terminar la Compra  </button></Link>
                </div>
                <div className="home">
                    <Link to='/'> <img src="../../public/images/logo.png" alt="logo" /> </Link>
                </div>
            </div>
        </div>
    )
}

export default Contador;

