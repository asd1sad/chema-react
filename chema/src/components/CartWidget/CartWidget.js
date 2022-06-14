import {BsFillCartPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

 
export const CartWidget = () => {
    
    const {totalQuantity} = useCartContext()

    return (
        <Link to='/cart' className='widget'>
            <BsFillCartPlusFill/>
            <span>{totalQuantity()}</span>
        </Link>
    )
 
}
 
 
 
