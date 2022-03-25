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
    // Fetches a quiz
    setTimeout(() => {
      let quiz = QuizModel.fromUntyped(mock);
      callback(quiz);
    }, 500);
  }

  submitQuizResults(quizModel) {
    // Submits a completed quiz
  }
}
