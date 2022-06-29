import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Navigate } from 'react-router-dom'
import { collection , addDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const Checkout = () => {
   

    const { cart , totalPrice, emptyCart } = useCartContext()
    
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if ( values.nombre.length < 5) {
            alert('Nombre demasiado corto')
            return  
        }
        if ( values.email.length < 5) {
            alert('email invalido')
            return  
        }
        if ( values.direccion.length < 5) {
            alert('direccion no es correcta')
            return  
        }

        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad , nombre, precio})),
            total: totalPrice()
        }
        
        const ordenesRef = collection(db, 'ordenes')
        
        addDoc(ordenesRef, orden)
            .then((doc) => {
                setOrderId(doc.id)

                emptyCart()
            })
    }

    if (orderId) {
        return (
            <div className='container my-5'>
                <h2>Gracias por su compra</h2>
                <hr/>
                <p>Su numero de orden es : {orderId}</p>
            </div>
        )
    }
    
    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    name='nombre'
                    onChange={handleInputChange}
                    type={'text'}
                    placeholder='Tu nombre'
                    className='form-control my-2'
                />
                <input
                    value={values.email}
                    name='email'
                    onChange={handleInputChange}
                    type={'text'}
                    placeholder='Tu email'
                    className='form-control my-2'
                />
                <input
                    value={values.direccion}
                    name='direccion'
                    onChange={handleInputChange}
                    type={'text'}
                    placeholder='Tu direccion'
                    className='form-control my-2'
                />
                <button type='submit btn btn-primary'>Submit</button>
            </form>
            <button className='btn btn-danger' onClick={emptyCart}>Cancelar mi compra</button>
        </div>
    )
} 