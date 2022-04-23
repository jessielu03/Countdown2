import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import Question from "./Question.js"

function App() {

  const [questions, setQuestions] = useState([]);
  const [qInd, setQInd] = useState(0);

  const generateQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((data) => setQuestions(data.results))
  }
  
  
return (
  <div className="App">
    {<div>
    <button onClick={generateQuestions}>New Questions</button>
    {questions.map((q) => <Question question={q.question} correct={q.correct_answer} incorrect={q.incorrect_answers}/>)}
    
    </div>
    }
  </div>
 );
}

export default App;

//<Question question={q.question} correct={q.correct_answer} incorrect={q.incorrect_answers}/>
//{questions.map((q) => {JSON.stringify(q)})}