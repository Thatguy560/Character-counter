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
      wordSelectionCount: "",
    });
  };

  // This function will be responsible for the word counting
  wordCounter = (e) => {
    e.preventDefault();
    var keys = [];
    var counts = {};
    const input = this.state.firstValue
      .replace(/\W/g, " ")
      .replace(/[0-9]/g, " ")
      .split(" ")
      .filter((word) => word.trim());
    // console.log(input);
    for (let i = 0; i < input.length; i++) {
      var word = input[i];
      if (counts[word] === undefined) {
        counts[word] = 1;
        keys.push(word);
      } else {
        counts[word] += 1;
        keys.push(word);
        // console.log(keys);
      }
      keys.sort();

      for (let i = 0; i < keys.length; i++) {
        var key = keys[i];
        var result = key + " - " + counts[key];
        // console.log(result);
      }
      this.setState({
        wordSelectionCount: result,
        // wordSelectionCount: input,
      });
    }
  };

  render() {
    var numberOfCharacters = this.state.numberOfCharacters;
    var withoutWhiteSpace = this.state.withoutWhiteSpace;
    var words = this.state.numberOfWords;
    var lines = this.state.linesCount;
    console.log(this.state.wordSelectionCount);
    // var wordCounts = this.state.wordSelectionCount;
    // console.log(wordCounts);

    return (
      <div className="App">
        <header className="App-header">
          <form>
            <h1>Character Counter</h1>
            <p>
              Characters <span>{numberOfCharacters}</span> Without White Space{" "}
              <span>{withoutWhiteSpace}</span> Words <span>{words}</span> Lines{" "}
              <span>{lines}</span>
            </p>
            <textarea
              id="textarea"
              type="text"
              placeholder="Please type some text..."
              value={this.firstValue}
              onChange={this.firstHandle}
            />
            <h1>Word Counting</h1>
            {/* This button calls the wordCounter Method which should display all the Word listings */}
            <button className="btn" onClick={this.wordCounter}>
              Words Count
            </button>

            {/* Have a feature which displays certain words and counts them for much they're used */}
            <p>
              <span>{this.state.wordSelectionCount}</span>
            </p>

            {/* {this.state.wordSelectionCount &&
              Object.keys(this.state.wordSelectionCount).map((word, index) => {
                return (
                  <p>
                    <span>{this.state.wordSelectionCount[word]}</span> - {word}
                  </p>
                );
              })} */}
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
