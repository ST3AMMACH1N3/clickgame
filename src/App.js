import React, { Component } from 'react';
import Card from './components/Card';
let cards = [{ alt: 'Test', src: 'Test.jpg', clicked: false }];

class App extends Component {
    constructor() {
        super();
        this.state = { cards }
    }

    handleClick = id => {
        this.setState(prevState => {

        });
    }

    render() {
        return (
            <div>
                {cards.map()}
            </div>
        )
    }
}

export default App;