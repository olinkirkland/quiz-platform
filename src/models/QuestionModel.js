export default class QuestionModel {
  constructor(id, text, image, answers) {
    this.id = id;
    this.text = text;
    this.image = image;
    this.answers = answers;
  }

  static fromUntyped(u) {
    const id = u.id;
    const text = u.text;
    const image = u.image;
    const answers = u.answers;

    let questionModel = new QuestionModel(id, text, image, answers);
    return questionModel;
  }
}
