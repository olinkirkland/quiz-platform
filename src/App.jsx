import { useState } from 'react';
import QuizController from './controllers/QuizController';

function App() {
  useState(() => {
    console.log(new QuizController());
  }, []);

  return (
    <>
      <p>Hello World</p>
    </>
  );
}

export default App;
