import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: "",
      characterCount: "",
      withoutWhiteSpace: "",
      wordCount: "",
      linesCount: "",
      wordSelectionCount: "",
    };
  }

  firstHandle = (event) => {
    const input = event.target.value;
    console.log(input);
    const text = document.getElementById("textarea").value;
    const linesCount = text.split("/\r|\r\n|\n/").length;
    const characterCount = input === "" ? 0 : input.split("").length;
    const withoutWhiteSpace =
      input === "" ? 0 : input.split("").filter((char) => char !== " ").length;
    const words =
      input === "" ? 0 : input.split(" ").filter((word) => word.trim()).length;
    const lines = input === "" ? 1 : input.split(/\n/g).length;
    this.setState({
      firstValue: input,
      characterCount: characterCount,
      withoutWhiteSpace: withoutWhiteSpace,
      wordCount: words,
      linesCount: lines,
    });
  };

  render() {
    var characterCount = this.state.characterCount;
    var withoutWhiteSpace = this.state.withoutWhiteSpace;
    var words = this.state.wordCount;
    var lines = this.state.linesCount;
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
              id="textarea"
              type="text"
              placeholder="Please type some text..."
              value={this.firstValue}
              onChange={this.firstHandle}
            />
            {/* <p>test</p>  */}
            {/* Have a feature which displays certain words and counts them for much they're used */}
          </form>
        </header>
      </div>
    );
  }
}

export default App;
