import React from 'react';
import './style.css'

function Card(props) {
    return (
        <img draggable={false} alt={props.alt} src={props.src} onClick={() => props.handleClick(props.id)} />
    );
}

export default Card;