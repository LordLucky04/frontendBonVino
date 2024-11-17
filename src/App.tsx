import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
import Inicio from './components/Inicio.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="root">
      <BrowserRouter>
        <Menu style={{background: "green"}}/>
        <div className="main-content">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;