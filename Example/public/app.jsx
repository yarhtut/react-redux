var GreeterMessage = React.createClass({
  render:function () {
    var name = this.props.name;
    var message =this.props.message;

    return (
      <div>
        <h1>Hello {name} !!</h1>
        <p>This is paragraph {message}</p>
      </div>
    )
  }
});

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

var firstName = "Yar";
var message ="This is from React";

ReactDOM.render(
  <Greeter name={firstName} message={message} />,
  document.getElementById('app')
);
