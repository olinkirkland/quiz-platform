import React from 'react';

export default function Answer({ answer, index }) {
    return (
      <>
        <input type="radio" name="question" id={index}/>
        <span>{answer}</span>
        <br/>
      </>
    );
  }
  