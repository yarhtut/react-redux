var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default messaage'
    }
  },

  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>!!!Hello {name}!!!</h1>
        <p>!!{message} !!</p>
      </div>
    )
  }
});

var firstName = "Yar";
var message ="This is from React";

ReactDOM.render(
  <Greeter name={firstName} message={message} />,
  document.getElementById('app')
);
