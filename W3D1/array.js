/*const shelf = ['Percy Jackson', 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf[1]);*/

//GET THE LAST BOOK OF THE ARRAY
/*const shelf = ['Percy Jackson', 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf[shelf.length-1]);*/

//Return the index of a array element
/*const shelf = ['Percy Jackson', 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf.indexOf('Percy Jackson'));*/

//Can add an array within an array
/*const shelf = ['Percy Jackson', 'Six of Crows', ['Throne of Glass', 'Smoke and Bone'], 'King of Scars'];
console.log(shelf[2]);*/

/*const shelf = ['Percy Jackson', 1, 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf);
console.log(shelf.toString());
console.log(typeof shelf[1]);*/

/*const shelf = ['Percy Jackson', 1, 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf.join('***'));*/

//Replaces an item in the array with index of or through index
/*const shelf = ['Percy Jackson', 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf);
/*shelf[0] = 'trophy';
console.log(shelf);*/

/*shelf[shelf.indexOf('Throne of Glass')] = 'DONDA'
console.log(shelf);*/

//When you want to use ' 
/*console.log('ifrah\'s house')
console.log(`ifrah's house`)
console.log("ifrah's house")*/

//Removes the last item is popping and adding to the last item is pushing
/*const shelf = ['Percy Jackson', 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf.pop());
console.log(shelf.push('water'));
console.log(shelf);*/

//Removes the first item in the array with shift, unshift adds a new item at the start
/*const shelf = ['Percy Jackson', 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf.shift());
console.log(shelf.unshift('water'));
console.log(shelf);*/

//Removes the item from its index with first number then the number of items to be removes with the next number example [Index 3, remove 1]
/*const shelf = ['Percy Jackson', 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf);
console.log(shelf.splice(2,1))
console.log(shelf);*/

//Is a copy of a section of the array [index start 0, 3 index end]
/*const shelf = ['Percy Jackson', 'Six of Crows', 'Throne of Glass', 'Smoke and Bone', 'King of Scars'];
console.log(shelf);
const myOtherShelf = shelf.slice(0, 3);
console.log(myOtherShelf);*/

//Merging arrays together while reverse flips the array in the opposite order while sort puts things into alphabetical order
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
console.log(array3.reverse());
const reversedArray = array3.reverse();
console.log(reversedArray.sort());



