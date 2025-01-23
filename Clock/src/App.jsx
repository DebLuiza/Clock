import './global.scss'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './Components/Header/Header'
import MetodosEstudos from './Pages/MetodosEstudos/MetodosEstudos';
import MainPage from './Pages/MainPage/MainPage';

function App() {

  const [headerHeight, setHeaderHeight] = useState();

  const handleHeightChange = (height) => {
    setHeaderHeight(height);
  };

  return (
    <>
    <Router>
      <Header onHeaderChange={handleHeightChange}/>
      <Routes>
        <Route path='/' element={<MainPage tamHeader={headerHeight}/>}/>
        <Route path='/metodos' element={<MetodosEstudos tamHeader={headerHeight}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
