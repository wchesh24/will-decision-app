function square(x) {
    return x * x;
};

console.log(square(3));

//const squareArrow = (x) => {
//   return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

//Challenge Use Arrow Functions
//get first name ('Mike SMith') to Mike
// Create regular arrow function
// Create arrow function using shorthand syntax

const getFirstName = (fullName) => {
    return fullName.split (' ')[0];
}

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Will Cheshier'));