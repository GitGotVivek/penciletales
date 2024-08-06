import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navigation/Navbar'
import Footer from './Navigation/Footer'
import BackToTopButton from './Pages/BacktoTop'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTopButton />
    </>
  )
}

export default App
