// 1- desestructurando 
// import {Platos} from './platos.js';
// 2- default
// import Platos from './platos.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
 
import { Navbar } from './components/Navbar/Navbar'; 
import { CartProvider } from './components/Context/CartContext'; 
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Nosotros } from './components/Nosotros/Nosotros'
import { Cart } from './components/Cart/Cart'
import { Contacto } from './ejemplos/Contacto/Contacto'
import { LoginScreen } from './components/LoginScreen/LoginScreen';

function App() {
  
 
  return (
    <CartProvider>

     <BrowserRouter>

      <Navbar/>

          <Routes>  
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={  <ItemDetailContainer/> } />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/nosotros' element={ <Nosotros/>} />
            <Route path='/contacto' element={ <Contacto/>} />
            <Route path='*' element={ <Navigate to={'/'}/> } />

            <Route path='/login' element={ <LoginScreen/>} />  
          </Routes>

      </BrowserRouter>

      </CartProvider>
 
  );
}

export default App;

// class = className
// {} se escribe js adentro
// html va en camel case _ fontSize
// elementos tienen que estar cerrados _ img />
// App punto mas alto de la aplicacion