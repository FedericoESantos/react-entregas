import './App.css'
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Separador from './Components/Separador.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import FondoHome from "./Components/FondoHome.jsx";
import Bienvenida from "./Components/Bienvenida.jsx";
import CartProvider from "./Components/Context/CartContext.jsx";
import Error from './Components/Error';
import { CheckOut } from "../src/Components/CheckOut/CheckOut.jsx";
import Cart from './Components/Cart/Cart';
import Contacto from './Components/Contacto/Contacto.jsx';
import Loader from './Components/Loader.jsx';


function App() {

  return ( // el CartContext engloba a todos los componentes que usen ese contexto
    <div>
      <BrowserRouter>
        <CartProvider> 
          <NavBar />
          <Bienvenida />
          <FondoHome />
          <Loader />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/checkout"} element={<CheckOut/>} />
            <Route path={'*'} element={ <Error /> } />
            <Route path={'/contacto'} element={ <Contacto /> } />
          </Routes>

        </CartProvider>
        <div className='separa'>
          <Separador />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App