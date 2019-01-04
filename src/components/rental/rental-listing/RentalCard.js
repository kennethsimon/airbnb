import React from 'react';
import {Link} from 'react-router-dom';
export function RentalCard(props){
  const rental = props.rental;
    return (
      <div className={props.colNum}>
      <Link to={`/rentals/${rental.id}`}>
      <div className="card z-depth-0">
        <div className="card-image">
          <img src={rental.image} alt={rental.title}/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p className={`${rental.category}`}>{rental.shared ? 'shared' : 'whole'} {rental.category}-{rental.city}</p>
          <h6>{rental.title}</h6>
          <span>${rental.dailyRate} per night - free cancelation</span>
        </div>
        </div> 
      </Link>
      </div>
        
    )
}