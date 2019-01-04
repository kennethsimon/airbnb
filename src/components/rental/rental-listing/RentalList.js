import React from 'react';
import {RentalCard} from './RentalCard';
class RentalList extends React.Component {
 
    renderRentals(){
        return this.props.rentals.map((rental, index) => {
            return (
                 <RentalCard key={index} colNum='col s12 m6 l3' rental={rental}/>
            )
        });

    }
   
    render(){
        return (
         <div className="row">
             {this.renderRentals()}
         </div>
          
        )
    }
}

export default RentalList;