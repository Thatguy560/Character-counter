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
    var input = event.target.value;

    // Used to work out how many new lines have been entered in text box (Still needs to be fixed.)
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

  show = (e) => {
    e.preventDefault();
    // if ((document.getElementById("id").style.display = "none")) {
    document.getElementById("id").style.display = "";
    document.getElementById("id2").style.display = "";
    // } else {
    // document.getElementById("id").style.display = "none";
    // document.getElementById("id").style.display = "revert";
    // document.getElementById("id").style.visibility = "hidden";
    // document.getElementById("id2").style.visibility = "hidden";
    // }
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
          return (
            <div key={i}>
              <p>
                <span>{word[0].toUpperCase() + word.slice(1)}</span> -{" "}
                {count > 1 ? `${count} Times` : "1 Time"}
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
              placeholder="Please type some text..."
              value={this.firstValue}
              onChange={this.firstHandle}
            />
            <button className="btn" onClick={this.show}>
              Display Word Frequency
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

// var h0 = document.getElementById("textarea").style.height;
// document.getElementById("textarea").style.height = "auto";
// var h1 = document.getElementById("textarea").scrollHeight;
// document.getElementById("textarea").style.height = h0;
// var lineHeight = 20;
