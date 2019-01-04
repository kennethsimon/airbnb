const Rental = require('./rental')
class FakeDb {
    constructor(){
        this.rentals = [{
            title: 'central apartment',
            city: 'newyork',
            street: 'times square',
            category: 'apartment',
            image: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            bedrooms: 3,
            description: 'very nice',
            dailyRate: 34,
            
        },{
            title: 'middle apartment',
            city: 'dsm',
            street: 'mabibo',
            category: 'condo',
            image: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            bedrooms: 3,
            description: 'very nice',
            dailyRate: 3,
            
          
        }]
    }
    pushRentalsToDb(){
        this.rentals.forEach((rental) => {
         const newRental = new Rental(rental);

         newRental.save();
        })
    }
    seedDb(){
        this.pushRentalsToDb();
    }
}

module.exports = FakeDb