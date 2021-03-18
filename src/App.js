import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: "",
      characterCount: "",
    };
  }

  firstHandle = (event) => {
    const characterCount =
      event.target.value === "" ? 0 : event.target.value.split("").length;
    this.setState({
      firstValue: event.target.value,
      characterCount: characterCount,
    });
  };

  render() {
    var characterCount = this.state.characterCount;
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <h1>Character Counter</h1>
            <p>
              Characters <span>{characterCount}</span> Words <span>test</span>{" "}
              Lines <span>test</span> Without White Space <span>test</span>
            </p>
            <textarea
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
