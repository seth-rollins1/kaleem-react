import React from 'react';
import './card.component.css'
export const Card = props => (
    <div className="card-container">
       <img src={`https://robohash.org/${props.citybreak.id}?set=set2&size=180x180`} alt=""/>
       <h2> {props.citybreak.name}</h2>
<p>{props.citybreak.email}</p>
    </div>
)