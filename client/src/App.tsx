import { useState } from 'react'
import './App.css'
import Personajes from './pages/personajes'
import Mapa from './pages/mapa'
import GomiArtistas from './pages/gomiartistas'
import SobreNosotros from './pages/sobreNosotros'
import Navbar from './components/navbar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Mapa}/>
          <Route path='/personajes' Component={Personajes} />
          <Route path='/mapa' Component={Mapa} />
          <Route path='/sobreNosotros' Component={SobreNosotros}/>
          <Route path='/gomiArtistas' Component={GomiArtistas}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
