import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import Quiz from './components/Quiz';
import { Results } from './components/Results';
import { User } from './components/User';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
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
