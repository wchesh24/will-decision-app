var nameVar= 'William';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet='Julie';
console.log('nameLet', nameLet);

const nameConst ='Dean';
console.log('nameConst' , nameConst);

//Block scoping

const fullName = 'William Cheshier';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);