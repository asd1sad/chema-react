import './Item.scss'
import { ItemCount } from '../ItemCount/ItemCount'

const Item = ({item}) => {

    return (
        <div className="alo">
            <h2>{item.nombre}</h2>
            <img src={item.img}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
            {
                [ <ItemCount key={item.id}/> ]
            }
        </div>
    )
}

export default Item