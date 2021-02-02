import React from 'react';
import './Game.css';
import { connect } from 'dva';

var waitedForTyped = null;
var waitedTypedIndex = null;
var typeAudio = new Audio("http://jsdx.sc.chinaz.com/Files/DownLoad/sound1/201607/7571.mp3");
var pressButtonAudio = new Audio("https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/ibm-computer-keyboard-press-enter-key_GJE0qjEd.mp3");
var timer = null;

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickButton = this.handleClickButton.bind(this);
    this.typing = this.typing.bind(this);
    this.loseGame = this.loseGame.bind(this);
  }

  calculateTime() {
    clearInterval(timer);

    const { setMyState } = this.props;

    timer = setInterval(() => {
      var timeLeft = timeLeft - 1;

      setMyState({ timeLeft: timeLeft });

      if (timeLeft <= 0) {
        this.loseGame();
      }
    }, 100000);
  }

  handleClickButton(e) {
    const { gameState, setMyState } = this.props;

    if (!gameState) {
      setMyState({
          gameState: 1,
          score: 0
      });

      this.generateWord();
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", this.typing);
  }

  typing(event) {
    typeAudio.currentTime = 0;
    typeAudio.play();
    var typed = String.fromCharCode(event.which);
    var letter = document.getElementById("letter-" + waitedTypedIndex);

    const { word, setMyState, score } = this.props;

    if (typed === waitedForTyped) {
      if (waitedTypedIndex !== word.length - 1) {
        letter.classList.remove("wrong");
        letter.classList.add("typed");

        ++waitedTypedIndex;
        waitedForTyped = word[waitedTypedIndex];
      } else {
        pressButtonAudio.currentTime = 0;
        pressButtonAudio.play();

        setMyState({
          score: score + 1
        });

        this.generateWord();
      }
    } else {
      letter.classList.add("wrong");

      setMyState({
        score: score - 1
      });

      if (this.state.score < 0) {
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

    const { wordList, setMyState } = this.props;

    var random = Math.floor((Math.random() * wordList.length));
    var word = wordList[random];
    
    setMyState({
        word: word
    });

    waitedTypedIndex = 0;
    waitedForTyped = word[waitedTypedIndex];
  }

  loseGame() {
    alert("man, you lose..");
    window.removeEventListener("keydown", this.typing);
    clearInterval(timer);


    let { setMyState } = this.props;
    setMyState({
        gameState: 0
      });

    waitedForTyped = null;
    waitedTypedIndex = null;
  }

  render() {
    console.log("render了一次");

    const { word, score, timeLeft } = this.props;
    console.log(timeLeft, score, word);
    console.log("当前word", word);

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
        <button onClick={this.handleClickButton}>START</button>

        <div className="outer-wrap">
          <div className="row">
            <div className="score-wrap">
              Score:<span className="score">{score}</span>
            </div>

            <div className="time-wrap">
              Time left:<span className="time">{timeLeft}</span>
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
      wordList: state.index.wordList,
      word: state.index.word,
      gameState: state.index.gameState,
      timeLeft: state.index.timeLeft,
      score: state.index.score
    }),
    (dispatch) => ({
      setMyState(payload) {
        dispatch({ type: 'index/setMyState', payload });
      }
    })
  )(Game);