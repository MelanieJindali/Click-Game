import React, { Component } from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Card from './components/Card';
import cards from './data/cards.json';

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  // Grab the img by id & if clicked, set click key to 1 & increase score by 1 
  handleClick = id => {
    this.state.cards.find((card, i) => {
      if (card.id === id) {
        if (cards[i].clicked === 0) {
          cards[i].clicked = cards[i].clicked + 1;
          this.setState({ score: this.state.score + 1 });
        }
        this.state.cards.sort(() => Math.random() - 0.5)
        return true; 
      }
    })
    console.log('Current score:', this.state.score)
  }

  render() {
    return (
      <Wrapper>
        <Header />
          {this.state.cards.map(card => (
            <Card 
              clicked={this.clicked} 
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