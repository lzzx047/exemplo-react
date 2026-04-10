import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
   <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
