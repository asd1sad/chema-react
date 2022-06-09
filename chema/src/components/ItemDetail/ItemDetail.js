import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

 const ItemDetail = ( {item} ) => {

    const [cantidad, setCantidad] = useState(0)
 
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    // const handleAgregar = () => {
    //     const itemToCart = {
    //         ...item,
    //         cantidad
    //     }

    //     console.log(itemToCart)
    // }
    return (

            <div>
                <h2>{item.nombre}</h2>
                <img src={item.img} alt={item.nombre}/>
                <p>{item.desc}</p>
                <h4>Precio: ${item.precio}</h4>  

                <button onClick={handleVolver}>VOLVER</button> 

                <ItemCount
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
          
                // onAdd={handleAgregar}
                />
            </div>

    )
}

export default ItemDetail

