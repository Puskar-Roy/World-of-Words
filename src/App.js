import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import './styles/App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Hero/>
      <Routes>
        <Route path={"/login"} element={<Hero/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
