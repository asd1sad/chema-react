import { useEffect, useState } from "react"
import { getItem } from "../../Mock/getItem"  // Hecho a medida
import ItemDetail from "../ItemDetail/ItemDetail" // Componente Item deberia venir?
import { Spinner } from "react-bootstrap"
import { useParams  } from "react-router-dom"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)


    // const params = useParams()
    const { itemId } = useParams()
  
    // const navigate = useNavigate()

    // const handleVolver= () =>{
    //   navigate(-1)
    // }

    useEffect(() => {
        setLoading(true)

        getItem()
            .then((resp) => {
               setItem( resp.find((item) => item.id === Number(itemId)))
            })
            .catch((error) => {
                console.log('ERRORasdasdasd', error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [itemId])



    return (
        <section className="container my-5">
            
       
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                :  <ItemDetail item={item}/>
            }

            {/* <button className="boton-inicio"  onClick={handleVolver}>Volver</button> */}
     
        </section>
    )
}