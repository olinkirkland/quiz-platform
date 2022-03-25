import { useState } from 'react';
import QuizBuilder from './controllers/QuizBuilder';

function App() {
  useState(() => {
    console.log(new QuizBuilder());
  }, []);

  return (
    <>
      <p>Hello World</p>
    </>
  );
}

export default App;
