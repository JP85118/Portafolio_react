import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Pages/home/Home'
import About from './Pages/about/About'
import Proyects from './Pages/proyects/Proyects'
import Contact from './Pages/contact/Contact'
import Footer from "./Components/Footer";
import Login from "./Components/login/Login";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="proyects" element={<Proyects/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      <Login/>
    </div>
  )
}

export default App