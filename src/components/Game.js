import React from 'react';
import './Game.css';
import { connect } from 'dva';

var waitedForTyped = null;
var waitedTypedIndex = null;
var pressButtonAudio = new Audio("https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/ibm-computer-keyboard-press-enter-key_GJE0qjEd.mp3");
var timer = null;

class Game extends React.Component {
  constructor(props) {

    super(props);

    this.handleClickStartButton = this.handleClickStartButton.bind(this);
    this.typing = this.typing.bind(this);
    this.loseGame = this.loseGame.bind(this);
  }

  calculateTime() {
    clearInterval(timer);
    this.props.setRemoteState({
      timeLeft: 5
    });

    timer = setInterval(() => {
      var timeLeft = this.props.timeLeft - 1;
      this.props.setRemoteState({
        timeLeft: timeLeft
      });

      if (timeLeft <= 0) {
        this.loseGame();
      }
    }, 1000);
  }

  handleClickStartButton(e) {

    const { isGameStarted, setRemoteState } = this.props;
    if (!isGameStarted) {
      
      setRemoteState({
        isGameStarted: 1,
        score: 0
      });

      console.log("start generateWord", this.props.isGameStarted);
      this.generateWord();
      window.addEventListener("keydown", this.typing);
    }
  }

  typing(event) {
    var typed = String.fromCharCode(event.which);
    var letter = document.getElementById("letter-" + waitedTypedIndex);
    if (typed === waitedForTyped) {
      var word = this.props.word;
      if (waitedTypedIndex !== word.length - 1) {
        letter.classList.remove("wrong");
        letter.classList.add("typed");

        ++waitedTypedIndex;
        waitedForTyped = word[waitedTypedIndex];
      } else {
        pressButtonAudio.currentTime = 0;
        pressButtonAudio.play();
        this.props.setRemoteState((prevState) => {
          return { score: prevState.score + 1 };
        });
        this.generateWord();
      }
    } else {
      letter.classList.add("wrong");

      this.props.setRemoteState((prevState) => {
        return { score: prevState.score - 1 };
      });

      if (this.props.score < 0) {
        this.loseGame();
      }
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

    this.props.setRemoteState({
      word: word
    });

    waitedTypedIndex = 0;
    waitedForTyped = word[waitedTypedIndex];
  }

  loseGame() {
    alert("man, you lose..");
    window.removeEventListener("keydown", this.typing);
    clearInterval(timer);

    this.props.setRemoteState({
      isGameStarted: 0
    });

    waitedForTyped = null;
    waitedTypedIndex = null;
  }

  render() {
    
    // hope somebody can optimize these codes
    const { word } = this.props;

    var chars = [];
    for (var i = 0; i < word.length; ++i) {
      chars[i] = word[i];
    }
    var word_spans = chars.map((char, index) => {
      return (<span key={index} id={"letter-" + index}>{char}</span>);
    });

    console.log("word_spans", word_spans)

    return (
      <div className="wrapper">
        <h1>Typing Game{this.props.word}</h1>
        <p className="comment">Type fastly!</p>
        <button style={this.props.isGameStarted ? { display: 'hidden' } : {}} onClick={this.handleClickStartButton}>START</button>

        <div className="outer-wrap">
          <div className="row">
            <div className="score-wrap">
              Score:<span className="score">{this.props.score}</span>
            </div>

            <div className="time-wrap">
              Time left:<span className="time">{this.props.timeLeft}</span>
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
        isGameStarted: state.index.isGameStarted,
        score: state.index.score,
        word: state.index.word,
        wordList: state.index.wordList,
        timeLeft: state.index.timeLeft
      }),
    (dispatch) => ({
      setRemoteState(payload) {
        // dispatch(actionCreators.changeNameAction()); 不用 redux-thunk了
        dispatch({type: 'index/setRemoteState', payload});
      }
    })
  )(Game);
