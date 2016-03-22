// testing default parameter feature
// run with command below
// babel-node default.js --presets es2015
// or you can just have .babelrc config file in root dir to specify defaults for babel
function sayHello (name = 'Alex') {
  console.log('Hello ' + name + '!!');
}

sayHello();
sayHello('Sergey');
