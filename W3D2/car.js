const car = new Object();
console.log(car); 

car.seats = 8;
car.brand = 'Toyota';
car.make = 'Corolla';
car.color = {
    interior: 'Black and Gold',
    exterior: 'Red'
};
/*console.log(car.color['interior']);
console.log(car.color.interior);
console.log(car.color.exterior);
console.log(car.make);*/

//When accessing outside the function keyword values you cannot use this. like above for car. but for example const Bisharo you have to use this.
car.description = function() {
    return `My car is a ${car.color.exterior} ${car.brand} ${car.make} with an ${car.color.interior} interior and ${car.seats} seats!`;
};
console.log(car.description());