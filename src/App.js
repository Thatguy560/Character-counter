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
            <h1>Character Counter</h1>
            <p>
              Characters <span>test</span> Words <span>test</span> Lines{" "}
              <span>test</span> Without White Space <span>test</span>
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
