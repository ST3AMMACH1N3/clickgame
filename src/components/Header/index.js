import React from 'react';
import './style.css';

function Header(props) {
    let message;
    if (props.correct === true) {
        message = 'Correct!';
    } else if (props.correct === false) {
        message = 'Incorrect!';
    } else {
        message = 'Click an image to get started!';
    }
    return (
        <div className='container'>
            <span className='title'>Clicky Game</span>
            <span className='message'>{message}</span>
            <span className='scoreDisplay'>Score: {props.score} | Top Score: {props.topScore}</span>
        </div>
    );
}

export default Header;