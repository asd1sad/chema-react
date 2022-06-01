import { useState,useEffect } from 'react'
import './ItemCount.scss'
 

export const ItemCount = () => {

 const [cantidad, setCantidad] = useState(0)

    
    // Sumar    
    const  incrementarCantidad = () => {
                setCantidad( 
                    cantidad + 1
               )
    }
    
    // Restar
    const  restarCantidad = () => {
                setCantidad(  
                    cantidad - 1,
                    )
    }
            
    useEffect( () => {
                // console.log('Montado')

                return () => {
                    // console.log('Desmontado');
                }
            },[]);

{
    if (cantidad == -1){
        // console.log(cantidad)
        return setCantidad (0)
    } 
}
    return (
        
        <section className='cantidadProductos'>

            <button id='agregarItem' className='btn btn-primary'onClick={restarCantidad} >-</button>
            <p>{cantidad}</p>
            <button id='restarItem' className='btn btn-primary' onClick={incrementarCantidad}>+</button>

        </section>
    )
}

 