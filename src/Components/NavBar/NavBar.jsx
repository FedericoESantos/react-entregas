import CartWidgets from "../CartWidgets/CartWidgets.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div>
            <Link to="/"><img className="logo" src="/public/images/logo.png" alt="logo" height={80}/></Link>
                <h1>Pizza Flash</h1>
            </div>
            
            <nav>
                <ul>
                    <div>
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="/category/Pizzas" className="link">Pizzas</Link>
                        </li>
                        <li>
                            <Link to="/category/Postres" className="link">Postres</Link>
                        </li>
                        <li>
                            <Link to="/contacto" className="link">Contacto</Link>
                        </li>
                    </div>
                </ul>
            </nav>

            <Link to="/cart" className="cart">
                <CartWidgets />
            </Link>
            </div>
    )
}
export default NavBar;