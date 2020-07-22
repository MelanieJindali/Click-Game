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
    clickedCards: []
  };

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