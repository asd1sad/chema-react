import { useEffect, useState } from 'react'
import './ItemCount.scss'
 

export const ItemCount = ( {max, counter, setCounter } ) => {

    // Sumar   
    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }
    
    // Restar
    const handleRestar = () => {
        counter > 0 && setCounter(counter - 1)
    }
    
    console.log(counter)
    

    return (
        
        <section className='cantidadProductos'>

            <button id='restarItem' className='btn btn-primary'onClick={handleRestar} >-</button>
            <p>{counter}</p>
            <button id='agregarItem' className='btn btn-primary' onClick={handleSumar}>+</button>

            <button  className='btn btn-primary'/*  onClick={onAdd} */>Agregar al carrito</button>

        </section>
    )
}

