import React from "react";
import {useState} from "react"

const Question = (props) => {
    const [answered, setAnswered] = useState(false);
    const [status, setStatus] = useState();

    let buttons;
    if(props.incorrect.length != 1) {
        let answer = Math.floor(Math.random() * 4);
        buttons = Array(4).fill(null);
        console.log("buttons initialized");
        let iterator = 0;
        buttons[answer] = props.correct;
        for(let i = 0; i < 4; i++) {
            if(buttons[i] == null) {
                buttons[i] = props.incorrect[iterator];
                iterator++;
            }
        }
    }
    else {
        buttons = ["True", "False"];
    }

    const checkCorrect = (answer) => {
        setAnswered(true);
        if(answer == props.correct)
            return true;
        return false;
    }

    let questionColor = "black";
    if (answered) {
        questionColor = status ? "green" : "red";
    }
    return(
        <div>
            <p style={{color: questionColor}}><b>{props.question}</b></p>
            {buttons.map((b) => <button onClick={() => setStatus(checkCorrect(b))}>{b}</button>)}
        </div>
    )
}

export default Question;

//{buttons.map((b) => <button onClick={checkCorrect(b)}>b</button>)}