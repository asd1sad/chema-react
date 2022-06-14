import './Navbar.scss'
import { GiIceBomb } from "react-icons/gi";
import { GiKitchenKnives } from "react-icons/gi";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import  CartWidget  from "../CartWidget/CartWidget";
=======
import { CartWidget } from "../CartWidget/CartWidget";
>>>>>>> authContext
 
export const Navbar = () => {

 
    return (
<<<<<<< HEAD
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
=======
        <header className="header">
                <div className='header_container'>

                  <Link to={"/"}><h1 className='header_logo'>s<GiIceBomb/>ldy<GiKitchenKnives/>ar</h1></Link>
                
                        <nav className='header_navbar'>
                                <Link to={'/categoria/remeras'} className="header_navLink">REMERAS</Link>
                                <Link to={'/categoria/buzos'} className="header_navLink">BUZOS</Link>
                                <Link to={'/categoria/calzado'} className="header_navLink">CALZADO</Link>
                        </nav>

                  <CartWidget/>
                </div>

        </header>
>>>>>>> authContext
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