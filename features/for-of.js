var locations = [];

locations.push({
    name: 'San Francisco',
    weather: 56
});


locations.push({
    name: 'Sacramento',
    weather: 72
});


for (let location of locations) {
  console.log(`It's ${location.weather} in ${location.name}`);
}
