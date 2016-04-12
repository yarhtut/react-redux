var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default messaage'
    }
  },

  onButtonClick: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;

    alert(name);
  },

  // render
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>!!!Hello {name}!!!</h1>
        <p>!!{message} !!</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
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
