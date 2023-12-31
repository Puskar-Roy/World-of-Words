import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import SCard from './Components/Cards/SCard';
import TCard from './Components/Cards/TCard';
import Footer from './Components/Footer/Footer';
import './styles/App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <SCard/>
    <TCard/>
      <Routes>
        <Route path={"/login"} element={<Hero/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
