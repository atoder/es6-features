var city = 'SF';
var laptop = 'Macbook';


function printHello () {
  console.log('Hello');
}

var person = {
  name: 'Alex',
  city: city,
  laptop,
  printHello,
  ['hello' + (3 + 2)]: 'I am here',
  printCity () {
     console.log(this.city); 
  }
}

console.log(person.city);
console.log(person.laptop);
console.log(person);
console.log(person.hello5);
console.log(person.printCity());
