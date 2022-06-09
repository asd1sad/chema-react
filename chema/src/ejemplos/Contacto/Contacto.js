import { useEffect } from "react"

const Contacto = () => {

    useEffect(() =>{

        const clicker = () => {
            console.log('click detectado')
        }

        window.addEventListener('click', clicker)

        return () => {
            window.removeEventListener('click', clicker)
        }
    }, [])

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })


    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')

    const handleNombre =(e) => {
        setNombre(e.target.value)
    }

    const handleEmail =(e) => {
        setNombre(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const datos = {
        nombre,email
        }
        console.log("Submit del form")
        console.log(datos)//value
    }

    return(
        <div>
            <h2>Contacto</h2>
            <hr/>


            <form onSubmit={handleSubmit}>
                <h4>Datos Personales</h4>

                <input
                onChange={handleNombre}
                value={values.nombre}
                placeholder="nombre"
                type={'text'}
                className='form-control my-2'
                />

                <input
                onChange={handleEmail}
                value={values.email}
                placeholder="email"
                type={'email'}
                className='form-control my-2'
                />

                <input
                placeholder="direccion"
                type={'text'}
                className='form-control my-2'
                />
            </form>
        </div>
    )
}