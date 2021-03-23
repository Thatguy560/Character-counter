import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: "",
      numberOfCharacters: "",
      withoutWhiteSpace: "",
      numberOfWords: "",
      linesCount: "",
      wordSelectionCount: "",
    };
  }

  firstHandle = (event) => {
    var input = event.target.value;

    const text = document.getElementById("textarea").value;
    const linesCount = text.split("/\r|\r\n|\n/").length;
    const numberOfCharacters = input === "" ? 0 : input.split("").length;

    const withoutWhiteSpace =
      input === "" ? 0 : input.split("").filter((char) => char !== " ").length;
    const words =
      input === "" ? 0 : input.split(" ").filter((word) => word.trim()).length;
    const lines = input === "" ? 1 : input.split(/\n/g).length;

    this.setState({
      firstValue: input,
      numberOfCharacters: numberOfCharacters,
      withoutWhiteSpace: withoutWhiteSpace,
      numberOfWords: words,
      linesCount: lines,
    });
  };

  // This function will be responsible for the word counting
  test = (e) => {
    console.log(this.state.firstValue);
    e.preventDefault();
  };

  render() {
    var numberOfCharacters = this.state.numberOfCharacters;
    var withoutWhiteSpace = this.state.withoutWhiteSpace;
    var words = this.state.numberOfWords;
    var lines = this.state.linesCount;
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <h1>Character Counter</h1>
            <p>
              Characters <span>{numberOfCharacters}</span> Without White Space{" "}
              <span>{withoutWhiteSpace}</span> Words <span>{words}</span> New
              Lines <span>{lines}</span>
            </p>
            <textarea
              id="textarea"
              type="text"
              placeholder="Please type some text..."
              value={this.firstValue}
              onChange={this.firstHandle}
            />
            <h1>Word Counting</h1>
            <button className="btn" onClick={this.test}>
              test
            </button>
            <p>
              <span>Word</span> <span>Count</span>{" "}
            </p>
            {/* Have a feature which displays certain words and counts them for much they're used */}
          </form>
        </header>
      </div>
    );
  }
}

export default App;

// var h0 = document.getElementById("textarea").style.height;
// document.getElementById("textarea").style.height = "auto";
// var h1 = document.getElementById("textarea").scrollHeight;
// document.getElementById("textarea").style.height = h0;
// var lineHeight = 20;
// console.log(Math.ceil(h1 / lineHeight));
