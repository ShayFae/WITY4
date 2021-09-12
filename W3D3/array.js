const array = ['ifrah', 4, [1, 2, 3, 4], true, {fruit: 'apple'}];
//length-1 gets the last array index use .fruit ot ["fruit"] to get the value of the object
// console.log(array[array.length-1]["fruit"]);

// get allows for you to change and get the information  returning it to the user
//While using just the function you're only changing it
//With setter you're adding information(setting it up) you set it like how you would with a const or let instead using key.value
const house = {
    roomNum: 4,
    roofColor: 'brown',
    finishedBasement: true,
    // finishBasement: function () {
    //     this.finishedBasement = !this.finishedBasement;
    // }
    get finishBasement() {
        this.finishedBasement = !this.finishedBasement;
        return this.finishedBasement;
    },
    set changeRoofColor(color) {
        this.roofColor = color = `My new favourite color is ${color}`;
    },
    tenants: 5,
    get myFamily() {
        return `There is this ${this.tenants} many people living in my home`
    },
    set addFamily(num) {
        this.tenants = num + this.tenants;
    }
};
console.log(house.myFamily);
house.addFamily = 8;
console.log(house.myFamily);
// house.changeRoofColor = 'yellow';
//  console.log(house);
// house.finishBasement()
// console.log(house);
// house.roofColor = 'blue';
console.log(house.myFamily);

// console.log(house.finishBasement);
// console.log(house.finishBasement);


//  const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     language: 'en',
//     get lang() {
//         return this.language;
//     }
// };
// console.log(person.lang);




