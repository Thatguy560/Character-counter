import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: "",
      characterCount: "",
      withoutWhiteSpace: "",
      words: "",
      lines: "",
    };
  }

  firstHandle = (event) => {
    const input = event.target.value;
    const characterCount = input === "" ? 0 : input.split("").length;
    const withoutWhiteSpace =
      input === "" ? 0 : input.split("").filter((char) => char !== " ").length;
    const words = input === "" ? 0 : input.split(" ").length;
    const lines = input === "" ? 1 : input.split("\n").length;
    this.setState({
      firstValue: input,
      characterCount: characterCount,
      withoutWhiteSpace: withoutWhiteSpace,
      words: words,
      lines: lines,
    });
  };

  render() {
    var characterCount = this.state.characterCount;
    var withoutWhiteSpace = this.state.withoutWhiteSpace;
    var words = this.state.words;
    var lines = this.state.lines;
    console.log(document.getElementById("textarea"));

    return (
      <div className="App">
        <header className="App-header">
          <form>
            <h1>Character Counter</h1>
            <p>
              Characters <span>{characterCount}</span> Without White Space{" "}
              <span>{withoutWhiteSpace}</span> Words <span>{words}</span> Lines
              {"  "}
              <span>{lines}</span>
            </p>
            <textarea
              // id="id"
              type="text"
              placeholder="Please type some text..."
              value={this.firstValue}
              onChange={this.firstHandle}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
