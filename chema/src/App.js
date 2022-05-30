// 1- desestructurando 
// import {Platos} from './platos.js';
// 2- default
// import Platos from './platos.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
 
import { Navbar } from './components/Navbar/Navbar'; 
import { ItemCount } from './components/ItemsCount.js/ItemCount';
import { useState } from 'react';
 



function App() {
  
 const [mostrar,setMostrar] = useState(true)
 
 const mostrarCounter = () => {
   setMostrar(!mostrar)
 }

  return (
    <div>
   
          <Navbar/>

          <button className='btn btn-primary' onClick={mostrarCounter}>Mostrar/Ocultar</button>

          {
            mostrar ? <ItemCount/> : <div></div>
          }

       
       
    </div>
  );
}

export default App;

// class = className
// {} se escribe js adentro
// html va en camel case _ fontSize
// elementos tienen que estar cerrados _ img />
// App punto mas alto de la aplicacion