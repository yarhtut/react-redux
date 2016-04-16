var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');


var Weather = React.createClass({
  //getInitialState
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    }
  },
  // handleSearch
  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 23
    });
  },
  // render
  render: function() {
    var {temp, location} = this.state;
    return (
      <div>
        <h3> Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location} />
      </div>
    )
  }
});

module.exports = Weather;
