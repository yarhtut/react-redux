var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = "Yar";
var message ="This is from React";

ReactDOM.render(
  <Greeter name={firstName} message={message} />,
  document.getElementById('app')
);
