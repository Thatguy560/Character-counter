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
    };
  }

  firstHandle = (event) => {
    const input = event.target.value;
    const textArea = document.getElementById("textarea");
    const enteredLines = input.split(/\n/g).length;
    const calculateNumberOfLines = Math.ceil(
      textArea.value.length / textArea.cols
    );
    console.log(textArea.value.length / textArea.cols);

    const numberOfCharacters = input === "" ? 0 : input.split("").length;
    const withoutWhiteSpace =
      input === "" ? 0 : input.split("").filter((char) => char !== " ").length;
    const words =
      input === "" ? 0 : input.split(" ").filter((word) => word.trim()).length;
    const lines = input === "" ? 0 : calculateNumberOfLines + enteredLines - 1;

    this.setState({
      firstValue: input,
      numberOfCharacters: numberOfCharacters,
      withoutWhiteSpace: withoutWhiteSpace,
      numberOfWords: words,
      linesCount: lines,
    });
  };

  showHide = (e) => {
    e.preventDefault();
    if (document.getElementById("id").style.display !== "none") {
      document.getElementById("id").style.display = "none";
      document.getElementById("id2").style.display = "none";
    } else {
      document.getElementById("id").style.display = "block";
      document.getElementById("id2").style.display = "block";
    }
  };

  render() {
    let freqMap = {};
    let numberOfCharacters = this.state.numberOfCharacters;
    let withoutWhiteSpace = this.state.withoutWhiteSpace;
    let words = this.state.numberOfWords;
    let lines = this.state.linesCount;
    let wordsWithoutSpecialChars = this.state.firstValue
      .replace(/[^A-Za-z']/g, " ")
      .replace(/[0-9]/g, " ")
      .toLowerCase()
      .split(" ")
      .filter((word) => word.trim());

    wordsWithoutSpecialChars.forEach((w) => {
      if (!freqMap[w]) {
        freqMap[w] = 0;
      }
      freqMap[w]++;
    });

    const sortKeysAToZ = Object.keys(freqMap)
      .sort()
      .reduce((r, k) => ((r[k] = freqMap[k]), r), {});

    const sortByHighestToLowest = Object.fromEntries(
      Object.entries(sortKeysAToZ).sort(([, a], [, b]) => b - a)
    );

    function wordFrequencyCounter() {
      const wordsResult = Object.entries(sortByHighestToLowest).map(
        ([word, count], i) => {
          const wordDensity = parseFloat(
            (count * 100) / wordsWithoutSpecialChars.length
          ).toFixed(2);
          return (
            <div key={i}>
              <p>
                <span>{word[0].toUpperCase() + word.slice(1)}</span> -{" "}
                {count > 1
                  ? `${count} Times (${wordDensity}%)`
                  : `1 Time (${wordDensity}%)`}
              </p>
            </div>
          );
        }
      );
      return wordsResult;
    }

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
              cols="73"
              placeholder="Please type some text..."
              value={this.firstValue}
              onChange={this.firstHandle}
            />
            <button className="btn" onClick={this.showHide}>
              Show/Hide Word Frequency
            </button>
            <h1 id="id2" style={{ display: "none" }}>
              Word Frequency
            </h1>
            <div id="id" style={{ display: "none" }}>
              {wordFrequencyCounter()}
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
