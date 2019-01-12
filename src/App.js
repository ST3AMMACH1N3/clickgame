import React, { Component } from 'react';
import Card from './components/Card';
import cards from './cards.json'

class App extends Component {
    constructor() {
        super();
        this.state = {
            cards,
            score: 0,
            topScore: 0
        }
    }

    handleClick = id => {
        if (this.state.cards[id].clicked) {
            this.restart();
            return;
        }
        this.setState({
            cards: this.state.cards.map(obj => {
                if (obj.id === id) {
                    obj.clicked = true;
                }
                return obj;
            }),
            score: this.state.score + 1
        });
    }

    restart = () => {
        this.setState({
            cards: this.state.cards.map(obj => {
                obj.clicked = false;
                return obj;
            }),
            score: 0,
            topScore: Math.max(this.state.score, this.state.topScore)
        })
    }

    render() {
        return (
            <div>
                <h2>Score: {this.state.score}</h2>
                <h2>Top Score: {this.state.topScore}</h2>
                {
                    this.state.cards.map(obj => {
                        return <Card key={obj.id} id={obj.id} alt={obj.alt} src={obj.src} handleClick={this.handleClick} clicked={obj.clicked}  />
                    })
                }
            </div>
        )
    }
}

export default App;