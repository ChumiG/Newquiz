import React from "react";
import data from "../data";

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "start",
      title: data[0].title,
      text:
        "Choose your answers carefully, you will not be able to change your answer after selecting.",
      buttonText: "Start the quiz"
    };

    this.popupHandle = this.popupHandle.bind(this);
  }

  popupHandle() {
    let { time } = this.state;

    if (time === "start") {
      this.setState({
        time: "end",
        title: "Congratulations!",
        buttonText: "Restart"
      });

      this.props.startQuiz();
    } else {
      location.reload(); // restart the application
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text:
        "You have completed the quiz. <br /> You got: <strong>" +
        this.props.score +
        "</strong> out of <strong>" +
        this.props.total +
        "</strong> questions right."
    });
  }

  createMarkup(text) {
    return { __html: text };
  }

  render() {
    let { title, text, buttonText } = this.state;

    let { style } = this.props;

    style = {
      display: "flex"
    };

    return (
      <div className="popup-container col-sm-13" style={this.props.style}>
        <div id="overlay"> </div>
        <div className="container">
          <div className="col-sm-12 ">
            <div className="popup">
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={this.createMarkup(text)} />
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.popupHandle}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
