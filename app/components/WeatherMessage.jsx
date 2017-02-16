var React = require('react');

// var WeatherMessage = React.createClass({
//     render:function(){
//         ;
//     }
// });

var WeatherMessage = ({temp, city}) => {
    // var {temp, city} = props;
    return (
        <div>
            <h3>The {props.city} has a temperature of {props.temp}&deg;</h3>
        </div>
    )
}

module.exports = WeatherMessage;