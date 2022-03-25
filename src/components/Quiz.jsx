import { useEffect, useState } from 'react';
import QuizController from '../controllers/QuizController';
import Question from './Question';
import { useNavigate } from 'react-router-dom';
// import { useNavigate, useLocation, Outlet, NavLink } from "react-router-dom";

export default function Quiz() {
  const [quizModel, setQuizModel] = useState();
  const [question, setQuestion] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    new QuizController();
    QuizController.instance.fetchNewQuiz('trivia', 5, (value) => {
      setQuizModel(value);
    });
  }, []);

  useEffect(() => {
    if (!quizModel) return;
    setQuestion(quizModel.questions[questionIndex]);
  }, [questionIndex, quizModel]);

  function nextQuestion() {
    if (questionIndex < quizModel.questions.length - 1) {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    } else {
      setQuestionIndex(0);
      navigate("/results");
      // Go to Results page
    }
  }

  return (
    <>
      <p>{`Current question: ${questionIndex + 1}`}</p>
      <pre>{JSON.stringify(question, null, 2)}</pre>
      <Question question={question} />
      <button onClick={nextQuestion}>Next Question</button>
    </>
  );
}
