import React from "react";
import javadata from "../javaData";
import Answers from "./Answers";
import Popup from "./Popup";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nr: 0,
      total: 10, //data.length
      showButton: false,
      questionAnswered: false,
      score: 0,
      displayPopup: "flex",
      answerShow: "none",
      quiz: this.props.quiz
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  shuffle(questionList) {
    for (let i = questionList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionList[i], questionList[j]] = [questionList[j], questionList[i]];
    }
  }
  pushData(nr) {
    this.setState({
      question: javadata[0].questionlist[nr].question,
      answers: [
        javadata[0].questionlist[nr].answers[0],
        javadata[0].questionlist[nr].answers[1],
        javadata[0].questionlist[nr].answers[2],
        javadata[0].questionlist[nr].answers[3]
      ],
      correct: javadata[0].questionlist[nr].correct,
      nr: this.state.nr + 1
    });
  }

  componentWillMount() {
    this.shuffle(javadata[0].questionlist);
    let { nr } = this.state;
    this.pushData(nr);
  }

  nextQuestion() {
    let { nr, total } = this.state;
    // if (document.querySelector(".right")) //it is not checking if right answer, not adding right or wrong when they match
    //   document.querySelector(".right").className = "";

    if (nr === total) {
      this.setState({
        displayPopup: "flex",
        displayPop: "",
        answerShow: "none"
      });
    } else {
      this.setState({
        showButton: false,
        questionAnswered: false,
        selectedAns: false
      });
      this.forceUpdate();
      this.pushData(nr);
    }
  }

  handleShowButton() {
    this.setState({
      showButton: true,
      questionAnswered: true
    });
  }

  handleStartQuiz() {
    this.setState({
      displayPopup: "none",
      nr: 1,
      answerShow: "block"
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    let {
      nr,
      total,
      question,
      answers,
      correct,
      showButton,
      questionAnswered
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <Popup
              style={{ display: this.state.displayPopup }}
              score={this.state.score}
              total={this.state.total}
              startQuiz={this.handleStartQuiz}
            />
            <div id="question" style={{ display: this.state.answerShow }}>
              <h4>
                Question {nr}/{total}
              </h4>
              <p>{question}</p>
            </div>
            <Answers
              style={{ display: this.state.answerShow }}
              answers={answers}
              correct={correct}
              showButton={this.handleShowButton} //error aqui
              isAnswered={questionAnswered}
              increaseScore={this.handleIncreaseScore}
            />

            <div id="submit" style={{ display: this.state.answerShow }}>
              {showButton ? (
                <button className="btn btn-primary" onClick={this.nextQuestion}>
                  {nr === total ? "Finish quiz" : "Next question"}
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Main;
