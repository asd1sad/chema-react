 
import './main.css';
 

// 1- desestructurando 
// import {Platos} from './platos.js';
// 2- default
// import Platos from './platos.js';

import Navbar from './comoponents/Navbar'

function App() {
 
  const contenido = "Este es el menu de mi restaurant"

  return (
    <div className="App">
      <header>
      {/* <Platos/> */}
      <Navbar/>
      
      <h2>{contenido}</h2>
      
      </header>
    </div>
  );
}

export default App;
// class = className
// {} se escribe js adentro
// html va en camel case _ fontSize
// elementos tienen que estar cerrados _ img />