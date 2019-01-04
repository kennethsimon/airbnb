import React from 'react';
import {Link} from 'react-router-dom';
export function Header(){
    return (
        
  <nav>
    <div className="nav-wrapper">
      <Link to="/rentals" className="brand-logo">Airbnb</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
        
    )
}