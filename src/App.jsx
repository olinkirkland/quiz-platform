import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { QuestionContainer } from './components/QuestionContainer';
import { Results } from './components/Results';
import { User } from './components/User';
import QuizController from './controllers/QuizController';

function App() {
  useState(() => {
    console.log(new QuizController());
  }, []);

  return (
    <div>
      <h1>Test your knowledge about Germany</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/question-container" element={<QuestionContainer />} />
        <Route path="/results" element={<Results />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </div>
  );
}

export default App;
