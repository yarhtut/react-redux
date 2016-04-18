var React = require('react');

var GreeterForm = React.createClass({
  onFromSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;


    if(name.length > 0 ) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if( message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewName(updates);
  },

  render: function () {
    return(
      <form onSubmit={this.onFromSubmit}>
        <input type="text" ref="name" placeholder="enter name"/>
        <textarea ref="message" placeholder="enter message"></textarea>
        <button>Set Name</button>
      </form>
    )
  }//end render
})

module.exports = GreeterForm;
