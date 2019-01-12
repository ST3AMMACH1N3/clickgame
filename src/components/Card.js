import React from 'react';

function Card(props) {
    return <img alt={props.alt} src={props.src} onClick={() => props.handleClick(props.id)/>
}

export default Card;