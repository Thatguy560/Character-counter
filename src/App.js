import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: "",
    };
  }

  firstHandle = (e) => {
    this.setState({
      firstValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <h1>Character Count</h1>
            <p>
              Characters {} Words {} Lines {}
            </p>
            <textarea
              type="text"
              placeholder="Please type some text..."
              value={this.firstHandle}
              onChange={"test2"}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
