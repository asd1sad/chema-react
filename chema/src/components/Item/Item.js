import './Item.scss'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


export const Item = ( {item} ) => {

    return (
        <div className="alo">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
          
           <Link to={`/item/${item.id}`}>
               <button className="btn btn-primary">Click for more</button>
            </Link>
        </div>
    )
}

export default Item