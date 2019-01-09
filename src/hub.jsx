import React from "react";
import Main from "./Main";
import AgileMain from "./AgileMain";
import Footer from "./Footer";

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: false,
      main2: false,
      shown: "block"
    };

    this.loadQuiz = this.loadQuiz.bind(this);
    this.loadQuiz2 = this.loadQuiz2.bind(this);
  }

  loadQuiz() {
    this.setState({
      main: true,
      shown: "none"
    });
  }
  loadQuiz2() {
    this.setState({
      main2: true,
      shown: "none"
    });
  }

  render() {
    let main;

    if (this.state.main) {
      main = <Main />;
    }
    if (this.state.main2) {
      main = <AgileMain />;
    }

    return (
      <div id="answers" className="container">
        <ul className="col-sm-10 hub" style={{ display: this.state.shown }}>
          <h3>Select a Quiz</h3>
          <li className="" onClick={this.loadQuiz} data-id="1">
            <p>Java</p>
          </li>
          <li className="" onClick={this.loadQuiz2} data-id="2">
            <p>Agile</p>
          </li>
        </ul>
        {main}
        <Footer />
      </div>
    );
  }
}

export default Answers;
