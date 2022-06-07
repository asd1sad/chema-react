import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../../Mock/pedirDatos" // x2
import ItemList from "../ItemList/ItemList" // x2

// q : string, limit : number
// const busqueda = 'perritos'
// const url = 'api.giphy.com/v1/gifs/search?api_key:124&q=${busqueda}&limit=20'

// fetch(url)

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        
            .then((resp) => {
                setItems( resp )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="container my-5">
            
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemList items={items}/>
            }
            
        </section>
    )
}

// import productos from "../../Mock/data"
// import './ItemDetail.scss'


// const ItemDetail = ( {productos} ) => {

//     return <>
             
//             <h2>{item.nombre}</h2>
//             <img src={item.img}/>
//             <p>{item.desc}</p>
//             <h4>Precio: ${item.precio}</h4>
          
    
//     </>
// }

// export default ItemDetail

// // (
// //     <div className="contenedorProductosDetail">
// //         {
// //             item.map((item) => <Item key={item.id} item={item}/>)
// //         }
// //     </div>
// // )