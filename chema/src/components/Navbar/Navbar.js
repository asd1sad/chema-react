import './Navbar.scss'
import { GiIceBomb } from "react-icons/gi";
import { GiKitchenKnives } from "react-icons/gi";
import { Link } from "react-router-dom";
 
export const Navbar = () => {

 
    return (
            <header className="header_navbar">

                <Link to={"/"}><h1>s<GiIceBomb/>ldy<GiKitchenKnives/>ar</h1></Link>
                <nav>
                        <Link to={"/envios/caba"} className="header_navLink">CABA</Link>
                        <Link to={"/envios/ba"} className="header_navLink">BUENOS AIRES</Link>
                        <Link to={"/envios/interior"} className="header_navLink">INTERIOR</Link>
                </nav>
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