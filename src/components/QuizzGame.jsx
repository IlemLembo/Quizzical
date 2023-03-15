import React from "react";
import Quizz from "./Tools";

import {nanoid} from "nanoid"


function QuizzGame(){
    const [questions, setQuestions] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const [checked, setChecked] = React.useState(false)



    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5")
        .then(response => response.json())
        .then(data => {
            setQuestions(data.results);
            setLoading(false);
            console.log(questions);
        });
    },
    [])

    const quizzes=()=>{
        return questions.map(quizz => <div><Quizz

            question={quizz.question}

            options={quizz.incorrect_answers.map(
                option=> (
                    {
                        id: nanoid(),
                        content: option}
                        ))
                    }


            correct_answer={{
                id: nanoid(),
                content: quizz.correct_answer}} />
            <hr></hr>
        </div>

        )
    }
    return(
        <div className="quizzes">
        
            {loading ? <h1>Loading...</h1> : 
            quizzes()}

            {!loading && <button className="play--button">Check answers</button>}
            
        </div>
    )
}

export default QuizzGame