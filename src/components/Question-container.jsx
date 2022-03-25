import React from 'react';
import Answer from './Answer';

export default function Question_Container({ title, answers }) {

    return (
      <>
        <h3>{title}</h3>
        {answers.map((answer, index) => (
            <Answer answer={answer} index={index} key={index}/>
        ))}
        <br></br>
      </>
    );
  }
  