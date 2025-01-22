import './global.scss'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'


function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        {/* <Route path='/' element={<Home/>}>
          <Route path='Pag1' element={<Pag1/>}/>
          <Route path='Pag2' element={<Pag2/>}/>
        </Route> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
