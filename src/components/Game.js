import React from 'react';
import './Game.css';
import { connect } from 'dva';

var waitedForTyped = null;
var waitedTypedIndex = null;
class Game extends React.Component {
  constructor(props) {

    super(props);

    this.handleClickStartButton = this.handleClickStartButton.bind(this);
    this.typing = this.typing.bind(this);

    this.state = {
      isGameStarted: 0,
      score: 0,
      word: ""
    }
  }

  calculateTime() {    
    let standardSeconds = this.state.word.length;
    if(standardSeconds < 2){
      standardSeconds = 2;
    }
    this.props.setRemoteState({
      timeLeft: standardSeconds
    });   
  }

  handleClickStartButton(e) {
    if (!this.state.sGameStarted) {

      this.setState({
        isGameStarted: 1,
        score: 0
      });

      this.generateWord();
      window.addEventListener("keydown", this.typing);
    }
  }

  typing(event) {
    var typed = String.fromCharCode(event.which);
    var letter = document.getElementById("letter-" + waitedTypedIndex);
    if (typed === waitedForTyped) {
      var word = this.state.word;
      if (waitedTypedIndex !== word.length - 1) {
        letter.classList.remove("wrong");
        letter.classList.add("typed");

        ++waitedTypedIndex;
        waitedForTyped = word[waitedTypedIndex];
      } else {
        this.setState({
          score: this.state.score + 1
        });
        this.generateWord();
      }
    } else {
      letter.classList.add("wrong");

      this.setState({
        score: this.state.score - 1
      });

    }
  }

  resetSpans() {
    var letters = document.getElementsByTagName("span");
    for (var i = 1; i < letters.length; ++i) {
      letters[i].className = "";
    }
  }

  generateWord() {
    this.resetSpans();
    this.calculateTime();

    var random = Math.floor((Math.random() * this.props.wordList.length));
    var word = this.props.wordList[random];

    this.setState({
      word: word
    });

    var pressButtonAudio = new Audio("http://dict.youdao.com/dictvoice?audio=" + word);
    pressButtonAudio.currentTime = 0;
    pressButtonAudio.play();

    waitedTypedIndex = 0;
    waitedForTyped = word[waitedTypedIndex];
  }

  render() {

    // hope somebody can optimize these codes
    const { word } = this.state;

    var chars = [];
    for (var i = 0; i < word.length; ++i) {
      chars[i] = word[i];
    }
    var word_spans = chars.map((char, index) => {
      return (<span key={index} id={"letter-" + index}>{char}</span>);
    });

    return (
      <div className="wrapper">
        <h1>Typing Game</h1>
        <p className="comment">Type fastly!</p>
        <button style={this.state.isGameStarted ? { display: 'none' } : {}} onClick={this.handleClickStartButton}>START</button>

        <div className="outer-wrap">
          <div className="row">
            <div className="score-wrap">
              Score:<span className="score">{this.state.score}</span>
            </div>
          </div>
        </div>

        <div className="words-wrap">
          {word_spans}
        </div>
      </div>
    );
  }

}


export default connect
  (
    (state) => ({
      wordList: state.index.wordList
    }),
    (dispatch) => ({
      setRemoteState(payload) {
        // dispatch(actionCreators.changeNameAction()); 不用 redux-thunk了
        dispatch({ type: 'index/setRemoteState', payload });
      }
    })
  )(Game);
