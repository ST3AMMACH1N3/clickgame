import React from 'react';

function Card(props) {
    return (
        <div>
            <h1>Clicked: {" " + props.clicked}</h1>
            <img alt={props.alt} src={props.src} onClick={() => {console.log('Clicked');props.handleClick(props.id)}} />
        </div>
    )
}

export default Card;