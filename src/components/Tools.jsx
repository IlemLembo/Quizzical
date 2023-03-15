import React from "react";


function Quizz (props){
    const options = props.options
    
    options.push(props.correct_answer)


    


    return(
        <div className="quizz">
        

            <h2 className="quizz--question">{(props.question)}</h2>

            <div className="options">
            

                {options.map(option =>(
                    <button className="option--btn blue" id={option.id}>
                        
                        {option.content}
                        
                    </button>))
                
                }

            </div>
        
        </div>
    )
}

export default Quizz