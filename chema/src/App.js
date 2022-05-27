// 1- desestructurando 
// import {Platos} from './platos.js';
// 2- default
// import Platos from './platos.js';


import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/Navbar'; 
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'; 

function App() {
  
 const escuela = {
   nombre: 'Moorlands',
 }

  return (

    <div>
        <Navbar/>

        <ItemListContainer nombre={escuela.nombre}/>
    </div>
  );
}

export default App;

// class = className
// {} se escribe js adentro
// html va en camel case _ fontSize
// elementos tienen que estar cerrados _ img />
// App punto mas alto de la aplicacion