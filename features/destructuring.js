var array = ['first', 'second', 'third'];
var [a, , c] = array;


console.log(a, c);


var todo = {
  description: 'Watch new es6 section',
  completed: false
};

var {description} = todo;

// prints Watch new es6 section'
console.log(description);

var {description: message} = todo;
// prints Watch new es6 section'
console.log(message);

var {description: message, completed} = todo;
// prints false
console.log(completed);



function getTodoStatus ({completed}) {
  if (typeof todo.completed === 'boolean') {
    return [`Todo is ${completed ?  '' : 'not' } completed.`];
  } else {
    return [undefined, {error: 'INVALID_TODO_ITEM'}];
  }  
}
var [res, err] = getTodoStatus(todo);

if (err) {
  console.log(err.error);
} else {
  console.log(res);
}
