// backtick key to add JavaScript expressions
function greet (name = 'Alexander')  {
  console.log('Hello ' + name + '!');
  console.log(`Hello ${name}`);
}

greet();
greet('Sergey');

console.log(`1 + 2 = ${1+2}`);

console.log(`Hey,

Testing multiple space breaks

- Alex

`);


var person = {
  name: 'Alexander',
  city: 'San Francisco'
}

var defaultPerson = {
  name: 'Anonymous', 
  city: 'unknown'
}; 

function welcomePerson (person = defaultPerson) {
  console.log(`Hello ${person.name} from the city of ${person.city}`);
}

welcomePerson();
welcomePerson(person);
