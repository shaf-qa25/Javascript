// objects

// literal
// const person = {};

// constructor 
// const person1 = new Object();

const person = {
    firstName : "Shafqa",
    LastName : "Fatma",
    Age : 20,
    mobile: [12345678 ,12346659, 1324354657],
    student : {
        firstName: "Ajay",
    }
};

console.log(person);

//ADD PROPERTIES

// person.email = "shafqa@gmail.com";
// person['mobile'] = 1234567889;

// console.log(person);


//ACCESS PROPERTIES

// console.log(person.firstName);
// console.log(person['LastName']);
// let abc = 'Age';
// console.log(person[abc]);


//Display Objects in HTML

document.write(person.firstName);
document.write(person['LastName']);
let abc= "Age";
document.write(person[abc]);
const str = JSON.stringify(person);
document.write(str);