import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/generals/navbar/Navbar';
import Home from './components/pages/home/Home';
import Footer from './components/generals/footer/Footer'
import Movies from './components/pages/movies/Movies';
import Dulceria from './components/pages/dulceria/Dulceria';
import { DetallePeli } from './components/pages/movies/DetallePeli';
import { CiudadAmin } from './components/pages/admin/Ciudad/CiudadAmin';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
    
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dulceria' element={<Dulceria />}/>
          <Route path='/peliculas' element={<Movies />}/>
          <Route path='/peliculas/:id' element={<DetallePeli />}/>
          <Route path='/ciudad/admin' element={<CiudadAmin />}/>
          <Route path='/*' element={<p>página no encontrada</p>}/>

        </Routes>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
