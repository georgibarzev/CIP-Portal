/** @jsx React.DOM */
var React = require('../../../../node_modules/react/react.js');
var moment = require('../../../../node_modules/moment/moment.js');
// react component DateBox will return a date time that updates every 50 miliseconds and appends it to a div with an id of 'date_box'
var DateBox = React.createClass({

    //sets initial state to the clock
    getInitialState: function(){
        return { clock: moment().format('MMMM Do YYYY, h:mm a') };
    },

    //setting refresh time for component
    componentDidMount: function(){
        setInterval(this.getDateString, this.props.pollInverval);
    },

    //gets all the information needed for the date time and returns it as a string.
    getDateString: function () {
        var date_string = moment().format('MMMM Do YYYY, h:mm a');
        this.setState({clock: date_string});
    },
    
    //rendering the html elements with the state.clock
    render: function() {
        return (
            <span className="ticker_span">
                <strong>{this.state.clock}</strong>
            </span>
        );
    }
}); 
//rendering with react to put onto the html
module.exports = DateBox;
