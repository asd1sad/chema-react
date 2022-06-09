// 1- desestructurando 
// import {Platos} from './platos.js';
// 2- default
// import Platos from './platos.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
 
import { Navbar } from './components/Navbar/Navbar'; 
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Nosotros } from './components/Nosotros/Nosotros'




function App() {
  
//  const [mostrar,setMostrar] = useState(true)
 
//  const mostrarCounter = () => {
//    setMostrar(!mostrar)
//  }

  return (
    <BrowserRouter>

      <Navbar/>

          <Routes>  
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={  <ItemDetailContainer/> } />
            <Route path='/nosotros' element={ <Nosotros/>} />
            <Route path='*' element={ <Navigate to={'/'}/> } />
          </Routes>

      </BrowserRouter>
  );
}

export default App;

// class = className
// {} se escribe js adentro
// html va en camel case _ fontSize
// elementos tienen que estar cerrados _ img />
// App punto mas alto de la aplicacion