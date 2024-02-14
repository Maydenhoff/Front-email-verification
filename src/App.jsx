import './App.css'
import {Route, Routes} from "react-router-dom"
import Formulario from './components/Formolario'
import { Registrado } from './components/Registrado'


const App = ()=> {
  return (
    <div className='App'>

 <Routes>
    <Route path="/" element={<Formulario/>}/>
    <Route path="/activate/:id" element={<Registrado/>}/>
 </Routes>
    </div>
  )
}

export default App
