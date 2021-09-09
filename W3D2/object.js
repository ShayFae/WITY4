// Object person =  key : value
const bisharo = { 
    name: "Bisharo",
    gender: "Female",
    age: "29",
    favouriteColor: "Purple",
    favouriteNumber: 12,
    favouriteBooks: ['House of night', ' Twilight', 'Six of crows'],
    favouriteClothes: 'Cardingen',
    greeting: function () {
        return `My name is ${this.name} and my favourite color is ${this.favouriteColor}`;
    }
};
// console.log(person.greeting());
/*console.log(person);
console.log(person.height);
console.log(person["favourite color"]);
console.log(person["favouriteBooks"]);

// Adds in a new keyword and value into the object
person.favouriteClothes = 'jean jacket';
console.log(person);

// Added isn't a const value so dress replaces the jacket
person.favouriteClothes = 'a dress';
console.log(person);
// Removes a property keyword
delete person.favouriteClothes;
console.log(person);*/

// Make sure object is captialized when wanting to use it
/*console.log(Object.values(person));
console.log(Object.keys(person));*/

const ifrah = new Object()
console.log(ifrah);
ifrah.name = 'Ifrah'
ifrah.gender = 'Female'
ifrah.age = '26'
ifrah.favouriteColor = 'Yellow'
ifrah.favouriteNumber = 5
ifrah.favouriteBooks = ['Percy Jackson', 'Hunger Games', 'King of Scars', 'Reboot']
ifrah.greeting = function () {
    return `My name is ${this.name} and my favourite color is ${this.favouriteColor}`;
}
// console.log(ifrah.greeting());

function Person (name, gender, age, favouriteColor, favouriteNumber, favouriteBooks, favouriteClothes) {
    this.name = name;
    this.gender = gender;
    this.aget = age;
    this.favouriteColor = favouriteColor;
    this.favouriteNumber = favouriteNumber;
    this.favouriteBooks = favouriteBooks;
    this.greeting = function () {
        return `My name is ${this.name} and my favourite color is ${this.favouriteColor}`;
    }
}

const ikran = new Person ('Ikran', 'female', '22', 'orange', 6, ['shatter me', 'kite runner', 'harry potter']);
const farhia = new Person ('Farhia', 'female', '25', 'green', 3, ['none']);
console.log(ikran);
console.log(ikran.greeting());
console.log(farhia);
console.log(farhia.greeting());
console.log(ifrah);
console.log(ifrah.greeting());
console.log(bisharo);
console.log(bisharo.greeting());
