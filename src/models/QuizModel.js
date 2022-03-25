export default class QuizModel {
  constructor(title, questions) {
    this.title = title;
    this.questions = questions;
  }

  static fromUntyped(u) {
    const title = u.title;
    const questions = u.questions;

    let quizModel = new QuizModel(title, questions);
    return quizModel;
  }
}
