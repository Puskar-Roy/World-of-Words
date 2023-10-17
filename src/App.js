import Navbar from './Components/Navbar/Navbar'
import './styles/App.css';
import { Router, Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        Hello
        <Navbar/>
        
    </div>
    
    </BrowserRouter>
  );
}

export default App;
