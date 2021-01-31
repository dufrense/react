import logo from './logo.svg';
import './App.css';
import store from './store';
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            Learn React {this.state.wholeName}
        </header>
      </div>
    );
  }
}

export default App;
