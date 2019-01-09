import React from "react";

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswered: false,
      classNames: ["", "", "", ""]
    };

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(e) {
    let { isAnswered } = this.props;

    if (!isAnswered) {
      let elem = e.currentTarget;
      let { correct, increaseScore } = this.props;
      let answer = Number(elem.dataset.id);
      let updatedClassNames = this.state.classNames;

      if (answer === correct) {
        updatedClassNames[answer - 1] = "right";
        increaseScore();
      } else {
        updatedClassNames[answer - 1] = "wrong";
      }

      this.setState({
        classNames: updatedClassNames
      });

      this.props.showButton();
      setTimeout(function() {
        updatedClassNames[answer - 1] = "";
      }, 10);
    }
  }

  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate() {
    return true;
  }

  componentWillUpdate() {}

  componentWillMount() {
    this.setState({
      classNames: ["", "", "", ""]
    });
    return true;
  }
  render() {
    let { answers } = this.props;
    let { classNames } = this.state;
    let { style } = this.props;

    let transition = {
      transitionName: "example",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300
    };

    return (
      <div id="answers" className="col-sm-12" style={style}>
        <ul>
          <li onClick={this.checkAnswer} className={classNames[0]} data-id="1">
            <p>{answers[0]}</p>
          </li>
          <li onClick={this.checkAnswer} className={classNames[1]} data-id="2">
            <p>{answers[1]}</p>
          </li>
          <li onClick={this.checkAnswer} className={classNames[2]} data-id="3">
            <p>{answers[2]}</p>
          </li>
          <li onClick={this.checkAnswer} className={classNames[3]} data-id="4">
            <p>{answers[3]}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Answers;
