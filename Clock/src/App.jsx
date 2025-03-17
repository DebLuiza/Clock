import './global.scss'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './Components/Header/Header'
import MetodosEstudos from './Pages/MetodosEstudos/MetodosEstudos';
import MainPage from './Pages/MainPage/MainPage';
import TimerModal from './Pages/TimerModal/TimerModal';
import Anotation from './Pages/Anotation/Anotation';

function App() {

  const [headerHeight, setHeaderHeight] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleHeightChange = (height) => {
    setHeaderHeight(height);
  };

  return (
    <>
    <Router>
      <Header onHeaderChange={handleHeightChange} setIsOpen={setIsOpen}/>
      {/* <TimerModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <Routes>
        <Route path='/' element={<MainPage tamHeader={headerHeight}/>}/>
        <Route path='/metodos' element={<MetodosEstudos tamHeader={headerHeight}/>}/>
        <Route path='/anotation' element={<Anotation tamHeader={headerHeight}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
