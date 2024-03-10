import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Bolsos } from './components/routes/Bolsos/Bolsos';
import { Carteras } from './components/routes/carteras/Carteras';
import { Zapatos } from './components/routes/zapatos/Zapatos';
import { Home } from './components/routes/home/Home';
import Navbar from './components/navbar/Navbar';
import { Administrador } from './components/routes/administrador/Administrador';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navbar/>} />
      <Route path='/home' element={<Home />} />
      <Route path='/bolsos' element={<Bolsos />} />
      <Route path='/carteras' element={<Carteras />} />
      <Route path='/zapatos' element={<Zapatos />} />
      <Route path='/administrador' element={<Administrador />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;