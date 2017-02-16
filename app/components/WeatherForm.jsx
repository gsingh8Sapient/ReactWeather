var React = require('react');

var WeatherForm = React.createClass({
    onButtonClicked: function(e){
        e.preventDefault();
        var city = this.refs.city.value;
        if(city.length > 0){
            this.refs.city.value ='';
            this.props.onNewCity(city);
        }
    },
    render: function(){
        return (
            <form onSubmit={this.onButtonClicked}>
                <input type="text" ref="city" placeholder="Enter city..."/>
                <button>Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;