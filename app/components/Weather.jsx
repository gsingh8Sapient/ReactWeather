var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var openWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getDefaultProps: function(){
        return{
            isLoading: false
        }
    },
    getInitialState: function(){
        return {
            city: this.props.city,
            temp: this.props.temp
        }
    },
    handleStateChange: function(city){
        var that = this;
        this.setState({
            isLoading: true
        })
        openWeatherMap.getTemp(city).then(function(temp){
            that.setState({
                city: city,
                temp: temp,
                isLoading: false
            })
        }, function(errorMessage){
            that.setState({
                isLoading: false
            })
            alert("errorMessage");
        })
    },
    render: function(){
        //One way of extracting values from state
        // var temp=this.state.temp;
        // var city=this.state.city;

        // Destructuring object ES6
        var {isLoading, temp, city} = this.state;
        function renderMessage(){
            if(isLoading){
                return <h3>Fetchin weather...</h3>
            } else if(temp && city){
                return <WeatherMessage city={city} temp={temp}/>
            }
        }
        return (
            <div>
                <h3>Weather Components</h3>
                <WeatherForm onNewCity={this.handleStateChange}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;