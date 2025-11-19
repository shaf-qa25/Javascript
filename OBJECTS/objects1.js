// objects

// literal
// const person = {};

// constructor 
// const person1 = new Object();

// const person = {
//     firstName : "Shafqa",
//     LastName : "Fatma",
//     Age : 20,
//     // fullName: function(){
//     //     return this.firstName+" "+this.LastName;
//     // },
//     // mobile: [12345678 ,12346659, 1324354657],
//     // student : {
//     //     firstName: "Ajay",
//     // }
// };

// console.log(person);




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

// document.write(person.firstName);
// document.write(person['LastName']);
// let abc= "Age";
// document.write(person[abc]);
// const str = JSON.stringify(person);
// document.write(str);

// console.log(person.mobile[1]);

// for(const x in person){
//     console.log(person[x]);
    
// }





// ADD METHODS 

//  person.fullName = function(){
//     return this.firstName+" "+this.LastName;
// };

// person.fullName = king
// function king(){
//     return this.firstName+" "+this.LastName;
// };

// console.log(person.fullName());




// DELETE

// delete person.firstName;
// console.log(person);




//OBJECTS CONSTRUCTOR METHODS
// function Person(fname, Lname , em , age){
//     this.firstName = fname;
//     this.lastName = Lname;
//     this.email = em;
//     this.age = age;
// }

// const person = new Person('Sachin', 'Tendulkar', 'sachin@gmail.com', 22);

// console.log(person);

// Person.prototype.mobile = 12344577;


// //Prototype ek hidden object hota hai jisse tumhara object extra properties inherit karta hai.ko inherit krte h hain constructor mein


// console.log(person);

// Person.prototype.fullName = function(){
//     return this.firstName+' '+this.lastName;
// };

// console.log(person);

// function A(){
//     this.x = 1;
//     return {y:2};
// };
// //this object ignored
// const a = new A();
// console.log(a);
// console.log(a.x);


// function A(){
//     this.x = 1;
//     return 2;
// };
// //primitive ignored
// const a = new A();
// console.log(a);
// console.log(a.x);
