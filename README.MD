# Playing around with es6 features

### .babelrc
In order not to run --presets es2015 when running babel-node command

Example:
Instead of
babel-node default.js --presets es2015
You can run
babel-node default.js


### To run nodemon with babel
nodemon --exec babel-node default.js
