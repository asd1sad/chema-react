import './ItemListContainer.scss'
import Button from 'react-bootstrap/Button';


export const ItemListContainer = ( {nombre}) => {

    return (
        <section className='container my-5'>
            <h2>  Nuestro producto </h2>
            <hr/>

            <p> Bienvenido {nombre}</p>

            <Button variant='success'>CLICK ME</Button>   

            <br/><br/>
            
            <button className='btn btn-primary'>CLICK ME</button>
        </section>
    )
}

