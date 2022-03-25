import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { QuestionContainer } from './components/QuestionContainer';
import { Results } from './components/Results';
import { User } from './components/User';
import QuizController from './controllers/QuizController';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useState(() => {
    new QuizController();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/question-container" element={<QuestionContainer />} />
        <Route path="/results" element={<Results />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
