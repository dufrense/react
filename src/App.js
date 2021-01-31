import { store, constants } from './store';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(()=>{this.setState(store.getState());})
  }

  render() {
    console.log(this.state.get)
    return (
      <div>
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            Learn React {this.state.wholeName}
        </header>
        <input placeholder="请输入要修改的名字" onBlur={this.changeName.bind(this)} />
      </div>
    );
  }

  changeName(e){
    store.dispatch((dispatch) => {
      axios.get('/nameBack.json').then(ret => {
        dispatch({type: constants.CHANGE_NAME, data: ret.data})
      })
    })
  }

}

export default App;
