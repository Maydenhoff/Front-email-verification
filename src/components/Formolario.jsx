import { useDispatch, useSelector } from "react-redux"
import { createUser } from "../Redux/action"
import {useState } from "react"

const Formulario = () => {
    const dispatch = useDispatch()
    const [formularioEnviado, setFormularioEnviado] = useState(false)
    const estadoFormulario = useSelector((state)=> state.estadoFormulario)
    const [userData, setUserData] = useState({
        name: "",
        last_name: "",
        user_name: "",
        email: "",
        password: "",
        cod: "",
        fecha_limite: ""

    })


    const handleChange = (event) => {
            setUserData({ ...userData, [event.target.name]: event.target.value })

            // validation(event.target, setErrors)
        }


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createUser(userData))
        setFormularioEnviado(true)
    }

    return (

        <div>

            <form  onSubmit={handleSubmit} >

                <div >
                    <label >Nombre:</label>
                    <input name="name" onChange={handleChange} />
                    {/* {errors.name.length ? (<p className={style.signupContainer}>{errors.name}</p>) : ""} */}

                    <br />

                    <label >Apellido:</label>
                    <input  name="surname" onChange={handleChange} />
                    {/* {errors.surname.length ? (<p className={style.signupContainer}>{errors.surname}</p>) : ""} */}

                    <br />
                    
                    <label >Username:</label>
                    <input  name="username" onChange={handleChange} />
                    {/* {errors.surname.length ? (<p className={style.signupContainer}>{errors.surname}</p>) : ""} */}

                    <br />
                    
                    <label >Email:</label>
                    <input  name="email" onChange={handleChange} />
                    
                    <br />
                    
                    <label >Password:</label>
                    <input type="password" name="password" onChange={handleChange} />

                    <button type="submit"  >CREAR</button>
                    {formularioEnviado 
                    ? <p>{estadoFormulario.message}</p>
                    : ""
                    }
                </div>
            </form>

        </div>
    )
}

export default Formulario