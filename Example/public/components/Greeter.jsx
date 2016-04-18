var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'Default messaage'
    }
  },

  getInitialState: function () {
    return {
      name: this.props.name,
      message : this.props.message
    }
  },

  handleNewName: function (updates) {
    this.setState(updates);
  },

  // render
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>

        <GreeterMessage name={name} message ={message}/>

        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    )
  }// render end
});

module.exports = Greeter;
