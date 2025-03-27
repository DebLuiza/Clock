import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from 'react';
import Header from './Components/Header/Header';
import MetodosEstudos from './Pages/MetodosEstudos/MetodosEstudos';
import MainPage from './Pages/MainPage/MainPage';
import TimerModal from './Pages/TimerModal/TimerModal';
import Anotation from './Pages/Anotation/Anotation';
import Login from './Pages/Login/Login';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [headerHeight, setHeaderHeight] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Obtém a rota atual

  const handleHeightChange = (height) => {
    setHeaderHeight(height);
  };

  return (
    <>
      {location.pathname !== "/" && (
        <Header onHeaderChange={handleHeightChange} setIsOpen={setIsOpen} />
      )}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/tarefas' element={<MainPage tamHeader={headerHeight} />} />
        <Route path='/metodos' element={<MetodosEstudos tamHeader={headerHeight} />} />
        <Route path='/anotation' element={<Anotation tamHeader={headerHeight} />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
