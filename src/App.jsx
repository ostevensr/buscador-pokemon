import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Pokemon from './views/Pokemon'


function App() {

  return (
    <>
    <div className='App'>
    <BrowserRouter>
    
      <NavBar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/pokemones" element={<Pokemon/>}/>
        <Route path="/pokemones/:nombre" element={<Pokemones/>}/>

      </Routes>

    </BrowserRouter>
    </div>
    </>
  )
}

export default App
