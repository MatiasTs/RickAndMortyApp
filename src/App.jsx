
import './App.css'
import Inicio from './components/Inicio'
import Info from './components/CharacterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path="/character/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
