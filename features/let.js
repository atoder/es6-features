// Testing let keyword

let name = 'Alexander';
console.log(name);


var x = 0;

if (true) {
  var x = 7;
  // prints out 7
  console.log(x);
}

// prints out 7
console.log(x);


if (true) {
  // variable is only seen inside this block
  let x = 3;
  // prints out 3
  console.log(x);
}

// prints out 7
console.log(x);

for (var i = 0; i < 4; i++) {
  console.log(`For loop: i = ${i}`);
}
console.log(i);


for (let j = 0; j < 4; j++) {
  console.log(`For loop: j = ${j}`);
}
// console.log on j would crash since let declares only local variable
// console.log(j);


// let variables are still accessible in inner blocks
function genCallback () {
  let name = 'Alex';
  
  return function () {
    console.log(`Hello ${name}`);
  }
}


genCallback()();
