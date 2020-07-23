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

    const cards = this.state.cards;
    // Filter clicked card by id
    const clickedCard = cards.filter(card => card.id === id);
    
    if (clickedCard.clicked) {
    for (let i = 0 ; i < clickedCard.length ; i++){
      clickedCard[i].clicked = false;
    }

    this.setState({cards})
    this.setState({score: 0})
    this.setState({clickedCards: clickedCard})
    
  } else if (this.state.score < 11) {
    
      clickedCard.clicked = true;
      
      this.setState({score: this.state.score + 1})

      if (this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.score })
      }

      clickedCard.sort((a, b) => 0.5 - Math.random());
      this.setState({ clickedCards: clickedCard })
    }
   
  }

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