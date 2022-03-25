
import { Routes, Route } from "react-router-dom";
import React from "react";
import { QuestionContainer } from "./components/QuestionContainer";
import { Results } from "./components/Results";
import { User } from "./components/User";
import { Login } from "./components/Login";
import { Home } from "./components/Home";

function App() {
  return (
    <div>
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
