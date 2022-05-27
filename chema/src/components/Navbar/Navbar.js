import './Navbar.scss'
import { GiIceBomb } from "react-icons/gi";
import { GiKitchenKnives } from "react-icons/gi";

export const Navbar = () => {

 
    return (
            <header className="header_navbar">
        
                <h1>s<GiIceBomb/>ldy<GiKitchenKnives/>ar</h1>
            
                <nav>
                    <ul>
                        <li className="header_navLink">CABA</li>
                        <li className="header_navLink">Buenos Aires</li>
                        <li className="header_navLink">Interior</li>
                    </ul>
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