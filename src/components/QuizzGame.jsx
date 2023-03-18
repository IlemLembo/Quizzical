import React from "react";
import { Link } from "react-router-dom";
import Quizz from "./Tools";

/*import {nanoid} from "nanoid"*/


function QuizzGame(){
    
    function shuffleArray(array) {

        for (let i = array.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];

        }

        return array;
    }

    const [questions, setQuestions] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [checkedAnswers, setCheckedAnswers] = React.useState(false)



    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5")
        .then(response => response.json())
        .then(data => {
            const shuffledQuestions = data.results.map((quizz) => {
                const shuffledOptions = shuffleArray([
                    ...quizz.incorrect_answers,
                    quizz.correct_answer,
                ]);
                return { ...quizz, options: shuffledOptions };
            });
            setQuestions(shuffledQuestions);
            setLoading(false);
        });
    }, []);

    
    const handleCheckAnswers=()=>{
        setCheckedAnswers(true);
    };

    const quizzes=()=>{
        return questions.map((quizz, index) => 
            (<div key={index}>
                <Quizz

                    question={quizz.question}

                    options={quizz.options}

                    correct_answer={quizz.correct_answer}
                    check={checkedAnswers}
                />

                
            </div>)
        )
    }

    const handleReload = () => {
        window.location.href = `${window.location.href}`;
    }

    return(
        <div className="quizzes">
        
            {loading ? (<h1>Loading...</h1>) : (
                < >
                    {quizzes()}
                    {!checkedAnswers?<button 
                        className="play--button"
                        onClick={handleCheckAnswers}
                        disabled={checkedAnswers}>

                        Check answers
                    </button> : 
                    <button 
                        className="play--button"
                        onClick={handleReload}
                        >
                        
                        Replay
                    </button>}
                </>
            )}

            
        </div>
    )
}

export default QuizzGame