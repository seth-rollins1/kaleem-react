import React from 'react';
import './destination-list.css';
import { Card } from '../card/card.component'

export const Destinationlist = props => (
 
 
    <div className="card-list">
            
    {
      props.citybreaks.map(citybreak => (
         
          <Card  key={citybreak.id} citybreak={citybreak}/>
      
         
      ) )
    }
    </div>
 
)