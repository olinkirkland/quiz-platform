import QuizModel from '../models/QuizModel';
import * as mock from './mock.json';

export default class QuizController {
  static instance = null;

  constructor() {
    if (!QuizController.instance) {
      QuizController.instance = this;
    }

    return QuizController.instance;
  }

  fetchNewQuiz(topic, questionCount, callback) {
    // Fetch a quiz from the backend
    const url = `http://localhost:3034/quiz/${14}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let quiz = QuizModel.fromUntyped(data);
        callback(quiz);
      });
  }

  submitQuizResults(quizModel, callback) {
    // Submit a completed quiz

    callback();
  }
}
