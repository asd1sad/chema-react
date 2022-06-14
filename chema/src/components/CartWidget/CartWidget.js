import {BsFillCartPlusFill} from 'react-icons/bs'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {

    // const {totalQuantity} = useContext(CartContext)
    const {totalQuantity} = useCartContext()

    return (
        <Link to="/cart" className='widget'>
=======
import { Link} from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

export const CartWidget = () => {
    
    const {totalQuantity} = useCartContext()

    return (
        <Link to='/cart' className='widget'>
>>>>>>> authContext
            <BsFillCartPlusFill/>
            <span>{totalQuantity()}</span>
        </Link>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> authContext
