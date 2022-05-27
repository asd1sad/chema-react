import './ItemListContainer.scss'
 

export const ItemListContainer = ( {nombre}) => {

    return (
        <section>
            <h2>  Nuestro producto </h2>
            <hr/>

            <p> Bienvenido {nombre}</p>
        </section>
    )
}

