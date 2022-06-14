import { useEffect, useState, useContext } from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../../Mock/pedirDatos"  
import ItemList from "../ItemList/ItemList"  
import { useParams  } from "react-router-dom"
 

 

export const ItemListContainer = () => {

 

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId  } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                if (!categoryId) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.categoria === categoryId) )
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

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