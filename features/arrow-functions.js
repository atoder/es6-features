var people = ['Alexander', 'Igor', 'Max'];

//people.forEach(function (name) {
//    console.log(name);
//});
//
//
//people.forEach((name) => console.log(name));



//people.forEach((name) => {
//  console.log('Welcome');
//  console.log(name);
//});

//function add (a, b) {
//  return a + b;
//};


//var add = (a, b) => { return a + b; }
//var add = (a, b) => a + b;
//console.log(add(3,9));

var person = {
  name: 'Alex',
  likes: ['Movies', 'Programming', 'Runner'],
  generateGreeter: function () {
    var that = this;
    return () => {
      console.log(this.name);
    }
  }
}

person.generateGreeter()();
