import React from "react";


function Quizz (props){

    
    let options = props.options
    const [check, setCheck] = React.useState(false)
    

    const [choice , setChoice] = React.useState(null)


    const handleChoice=(string) =>{

        setChoice(string)
    }



    

    return(
        <div className="quizz">
        

            <h2 className="quizz--question">{(props.question)}</h2>

            <div className="options">
            

                {options.map((option, index )=> {
                                
                    const isCorrect = props.check && option === props.correct_answer;
                    const isChosen = option === choice;
                    const isIncorrect = props.check && isChosen && !isCorrect;

                    const btnClassNames = ["option--btn"];
                    if (isChosen) btnClassNames.push("blue");
                    if (isCorrect) btnClassNames.push("correct");
                    if (isIncorrect) btnClassNames.push("incorrect");

                    return(
                        <div 
                            key={index}
                            className={btnClassNames.join(" ")}
                            onClick={()=>handleChoice(option)}>
                            
                            {option}
                            
                            
                        </div>
                    )
                })
                
                }
            </div>
            <hr></hr>
        
        </div>
    )
}

export default Quizz