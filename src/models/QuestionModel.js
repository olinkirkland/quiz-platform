export default class QuestionModel {
  constructor(id, title, text, number, imageUrl, topic, language, answers) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.number = number;
    this.imageUrl = imageUrl;
    this.topic = topic;
    this.language = language;
    this.answers = answers;
  }

  checkAnswer(answerId) {
    return true;
  }

  static fromUntyped(u) {
    const id = u.id;
    const title = u.question;
    const text = u.text;
    const number = u.number;
    const imageUrl = u.imageUrl;
    const topic = u.topic;
    const language = u.language;
    const answers = u.answers;

    let questionModel = new QuestionModel(
      id,
      title,
      text,
      number,
      imageUrl,
      topic,
      language,
      answers
    );

    return questionModel;
  }
}
