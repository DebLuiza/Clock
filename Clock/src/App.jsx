import './global.scss'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import MetodosEstudos from './Pages/MetodosEstudos/MetodosEstudos';
import MainPage from './Pages/MainPage/MainPage';

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/metodos' element={<MetodosEstudos/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
