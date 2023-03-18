import './App.css';
import up from "./assets/images/up.svg"
import down from "./assets/images/down.svg"
import Home from './components/Home';
import QuizzGame from './components/QuizzGame';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"


function App() {
  

  return (
    <Router>
    <div className="App">
      <img src={up} alt="" className="up"/>
      <img src={down} alt="" className="down"/>

      
      
      

        <Routes>
        
          <Route exact path='/' Component={Home}  />
          
          <Route path='/quizz' Component={QuizzGame} />
          
        </Routes>
      
      

    </div>
    </Router>
  );
}

export default App;
