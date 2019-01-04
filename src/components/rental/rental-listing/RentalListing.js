import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions';
import RentalList from './RentalList';
class RentalListing extends React.Component {
    componentWillMount(){
     this.props.dispatch(actions.fetchRentals());
    }
    render(){
        return (
            <div className="homes">
         <h6>homes around the world</h6>
         <RentalList rentals={this.props.rentals}/>
       </div>
        )
    }
}

function mapStateToProps(state){
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalListing);