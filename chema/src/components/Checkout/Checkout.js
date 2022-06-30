import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Navigate } from 'react-router-dom'
import { collection ,getDocs ,addDoc , writeBatch, query , where , documentId } from 'firebase/firestore'
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
    const handleSubmit = async (e) => {
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
        
        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos') 
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const outOfStock = []
        const productos = await getDocs(q)
 
        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)
 
            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordenesRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })          
        } else {
            console.log(outOfStock)
            alert(`Item sin stock: ${outOfStock}`)
            // alert('Item sin stock:' ,outOfStock)
        }
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

// cart.forEach((item) => {

//     const docRef = doc(db, 'productos', item.id)

  
// })   
// getDoc(docRef)
// .then((doc) => {
//     if((doc.data().stock - item.cantidad) >= 0){
//         updateDoc(docRef, {
//             stock: doc.data().stock - item.cantidad
//     })
// } else {
//     alert('No hay stock del producto: ' + item.nombre)
// }
// })