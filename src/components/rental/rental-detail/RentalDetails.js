import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions';
class RentalDetails extends React.Component{

    componentWillMount(){
        //dispatch action
        const rentalId = this.props.match.params.id;
        this.props.dispatch(actions.fetchRentalById(rentalId));
    }
    render(){
        const rental = this.props.rental;
        if(rental.id){
            return (
                <div>
                     <h1>{rental.title}</h1> 
                     <h1> {rental.city}</h1> 
                     <h1> {rental.description}</h1> 
                     <h1> {rental.dailyRate}$</h1> 
                </div>
            )
        }else{
            return (
                    <div className="loader">
                    <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
                    </div>
            )
        }
           
    }
}

function mapStateToProps(state){
    return {
       rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetails); 