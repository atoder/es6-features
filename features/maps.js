var myMap = new Map();

// set
myMap.set('name', 'Alex');

// get
console.log(myMap.get('name'));

// has
myMap.set('city', 'San Francisco');
console.log(myMap.has('city'));

// delete
myMap.delete('name');

// clear
myMap.clear();

// size
console.log(myMap.size);


var user = {name: 'Alex'};

myMap.set(user, 'SF');

console.log(myMap.get(user));
console.log(myMap.keys());
console.log(myMap.values());
