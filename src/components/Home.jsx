import React from "react";
import { Link } from "react-router-dom";
import QuizzGame from "./QuizzGame";

function Home (){
    return(
        <div className="Home">
            <h1 className="title">Quizzical</h1>
            <h3 className="subtitle">Hi there , Come and play</h3>

            
            <Link to="/quizz" >
                <button className="play--button">

                    Start the QuizzGame

                </button>
            
            </Link>
        </div>
    )
}

export default Home