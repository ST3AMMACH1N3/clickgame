import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import cards from './cards.json';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cards: cards.map(obj => {
                obj.clicked = false;
                return obj
            }),
            score: 0,
            topScore: 0,
            correct: ''
        }
    }

    handleClick = id => {
        let alreadyClicked = false;
        this.setState({
            cards: this.state.cards.map(obj => {
                if (obj.id === id) {
                    if (obj.clicked) {
                        alreadyClicked = true;
                    }
                    obj.clicked = true;
                }
                return obj;
            }),
            score: this.state.score + 1,
            correct: !alreadyClicked
        });
        if (alreadyClicked) {
            this.restart();
        }
        this.shuffle();
    }

    restart() {
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
                <Header correct={this.state.correct} score={this.state.score} topScore={this.state.topScore} />
                <br/>
                <div className='cards'>
                {
                    this.state.cards.map(obj => {
                        return <Card key={obj.id} id={obj.id} alt={obj.alt} src={obj.src} handleClick={this.handleClick} clicked={obj.clicked}  />
                    })
                }
                </div>
            </div>
        )
    }

    shuffle() {
        let newArray = [];
        let oldArray = JSON.parse(JSON.stringify(this.state.cards));
        for(let i = oldArray.length - 1; i >= 0; i--) {
            newArray.push(oldArray.splice(Math.floor(Math.random() * oldArray.length), 1)[0]);
        }
        
        this.setState({
            cards: newArray
        })
    }
}

export default App;