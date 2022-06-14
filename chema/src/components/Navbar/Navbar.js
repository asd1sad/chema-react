import './Navbar.scss'
import { GiIceBomb } from "react-icons/gi";
import { GiKitchenKnives } from "react-icons/gi";
import { Link } from "react-router-dom";
import  CartWidget  from "../CartWidget/CartWidget";
 
export const Navbar = () => {

 
    return (
        <header className="header2">
        <div className="header__container">

            <Link to={"/"}><h1 className="header__logo">PROYECTO CODER</h1></Link>
            

            <nav className="header__navbar">
                <Link to={"/categorias/remeras"} className="header__navlink">Remeras</Link>
                <Link to={"/categorias/buzos"} className="header__navlink">Buzos</Link>
                <Link to={"/categorias/zapatillas"} className="header__navlink">Zapatillas</Link>
            </nav>

            <CartWidget/>
        </div>
    </header>
    )
}

// export default Navbar



// 1
// export const Platos = () => {

//     return  <ul className="lista-platos">
//                 <h2>Platos del dia</h2>
//                 <hr/>
//                 <li>Wood</li>
//                 <li>Lumber</li>
//                 <li>Malaka</li>
//             </ul>
// }

//! 2 maneras de exportar : Default u Objeto
// una sola importacion por defecto puedo tener
// resto forma de objeto}

// 2
// export default platos; 