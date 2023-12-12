
import './App.css'
import Inicio from './components/Inicio'
import info from './components/CharacterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path="/hola" element={<info />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
