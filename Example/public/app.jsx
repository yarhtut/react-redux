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

    var name = this.refs.name.value;
    if(name.length > 0 ) {
      this.refs.name.value = '';

      this.props.onNewName(name);
    }
  },

  render: function () {
    return(
      <form onSubmit={this.onFromSubmit}>
        <input type="text" ref="name" />
        <button>Set Name</button>
      </form>
    )
  }
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
      name: this.props.name
    }
  },

  handleNewName: function (name) {
    this.setState({
      name: name
    })
  },

  // render
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>

        <GreeterMessage name={name} message ={message}/>

        <GreeterForm onNewName = {this.handleNewName}/>

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
