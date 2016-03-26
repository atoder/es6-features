// In a set we just set values. Sets can't contain same value twice

var chatRooms = new Set();

// add
chatRooms.add('Runner');
chatRooms.add('Tennis');


// size
console.log(chatRooms.size);

//has
console.log(`Does the set have runners: ${chatRooms.has('Tennis')}`);


// delete
chatRooms.delete('Runner');

console.log(chatRooms.size);

// remove all items
chatRooms.clear()

console.log(chatRooms.size);
