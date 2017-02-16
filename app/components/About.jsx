var React = require('react');

// var About = React.createClass({
//     render: function(){
//         return (
//             <h3>About Components</h3>
//         )
//     }
// });

// Creating stateless presentational component
var About = (props) => {
    return (
        <div>
            <h3>About</h3>
            <p>Welcome to About</p>
        </div>
            
        )
}

module.exports = About;