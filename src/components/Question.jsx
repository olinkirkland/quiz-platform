import React, {useState} from 'react';
import Question_Container from './Question-container';
import QuestionModel from '../models/QuestionModel';

export default function Question({ questions }) {
    const [count, setCount] = useState(0)

    function nextQuestion(){
        if(count < listTest.length-1){
            setCount(count + 1);
        }
        else{
            setCount(0);
            //resultsPage Link
        }
    }

    let listTest = [];
    listTest.push(new QuestionModel(0, "test", null, ["taes", "adda", "adadad" ,"wdf"]));
    listTest.push(new QuestionModel(1, "test", null, ["dad", "aww", "ddsad" ,"sasas"]));
    listTest.push(new QuestionModel(2, "test", null, ["ddd", "aaa", "adsad" ,"dadads"]));

    return (
      <>
        <Question_Container title={listTest[count].text} answers={listTest[count].answers}/>
        <button onClick={nextQuestion}>+1</button>
      </>
    );
  }
  