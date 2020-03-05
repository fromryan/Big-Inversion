import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const PersonCard = (props) => {
    return (
        <div class="mb-5">
        <h1 class="display-5">{props.lastName}, {props.firstName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
    </div>
    )
}

export default PersonCard;