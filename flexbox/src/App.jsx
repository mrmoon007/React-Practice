import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'

function App() {

  return (
    <>
    <div>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
        </Routes>
    </div>
    </>
  )
}

export default App
