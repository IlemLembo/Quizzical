import './App.css';
import up from "./assets/images/up.svg"
import down from "./assets/images/down.svg"
import Home from './components/Home';
import QuizzGame from './components/QuizzGame';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"


function App() {
  

  return (
    <div className="App">
      <img src={up} alt="" className="up"/>
      <img src={down} alt="" className="down"/>

      <QuizzGame />
      {/*
      <Router>
        <Routes>
          <Route exact path='/' Component={Home}>
          </Route>
        </Routes>
      
      </Router>*/
      }
    </div>
  );
}

export default App;
