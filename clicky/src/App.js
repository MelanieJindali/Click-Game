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
    }
    else {
      // this.resetScore();
    }
  }

  handleScore = () => {
    const newScore = this.state.score + 1;
    this.setState({ 
      score: newScore,
      gameMessage: "" 
    })
  }
 
  // Shuffle = cards.sort(() => 0.5 - Math.random());

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}/>
          {this.state.cards.map(card => (
            <Card 
              handleClick={this.handleClick}
              list={cards}
              key={card.id} 
              image={card.image} 
          />
          ))}
      </Wrapper>
    );
  }
}

export default App;