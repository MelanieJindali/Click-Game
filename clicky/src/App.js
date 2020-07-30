import React, { Component } from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Card from './components/Card';
import cards from './data/cards.json';

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0,
    clickedCards: [],
    gameMessage: ""
  };

  handleClick = id => {
    const clicked = this.state.clickedCards;

    if (clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({ clickedCards: clicked.concat(id) });
    } else {
      this.resetScore();
      }
  }

  handleScore = () => {
    const newScore = this.state.score + 1;
    this.setState({ 
      score: newScore,
      gameMessage: "" 
    });

    if (newScore >= this.state.highscore) {
      this.setState({ highscore: newScore });
    } else if (newScore === 12) {
      this.setState({ gameMessage: "We have a winner!" });
    }
    this.shuffleCards();
  }

  resetScore = () => {
    this.setState({
      score: 0,
      highscore: 0,
      gameMessage: "You lost! Click an image to try again.",
      clickedCards: []
    });

  }
 
  shuffleCards = () => {
    cards.sort(() => 0.5 - Math.random());
  }


  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}/>
        <h4>{this.gameMessage}</h4>
          {this.state.cards.map(card => (
            <Card 
              handleClick={this.handleClick}
              handleScore={this.handleScore}
              shuffle={this.shuffleCards}
              list={cards}
              key={card.id} 
              id={card.id} 
              image={card.image} 
          />
          ))}
      </Wrapper>
    );
  }
}

export default App;