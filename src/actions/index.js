import { FETCH_RENTALS, FETCH_RENTAL_BY_ID_SUCCESS, FETCH_RENTAL_BY_ID_INIT} from './types'
const rentals = [
    {
        id: '1',
        title: 'central apartment',
        city: 'newyork',
        street: 'times square',
        category: 'apartment',
        image: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        bedrooms: 3,
        description: 'very nice',
        dailyRate: 34,
        shared: false,
        createdAt: '24/12/2017',
    },{
        id: '2',
        title: 'middle apartment',
        city: 'dsm',
        street: 'mabibo',
        category: 'condo',
        image: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        bedrooms: 3,
        description: 'very nice',
        dailyRate: 3,
        shared: true,
        createdAt: '24/12/2017',
    }
];
const fetchRentalByIdInit = () => {
    return {
        type: FETCH_RENTAL_BY_ID_INIT
    }
}
const fetchRentalByIdSuccess = (rental) => {
    return {
        type: FETCH_RENTAL_BY_ID_SUCCESS,
        rental
    }
}

export const fetchRentals = () => {
    return {
        type: FETCH_RENTALS,
        rentals
    }
}

export const fetchRentalById = (rentalId) => {
    return function(dispatch){
        dispatch(fetchRentalByIdInit());
        setTimeout(() => {
            const rental = rentals.find((rental) => rental.id === rentalId);
            dispatch(fetchRentalByIdSuccess(rental));
        }, 1000);
    }
}

