/** @jsx React.DOM */

var React = require('../../../../node_modules/react/react.js');
// react component DateBox will return a date time that updates every 50 miliseconds and appends it to a div with an id of 'date_box'
var GoogleSearchBox = React.createClass({
    GetValueFromGoogleSearchInput: function(event){
    	var GoogleSearch = document.getElementById("google_search_input");
    	var UserSearchQuery = GoogleSearch.value.toString().replace(/ /g,"+");
    	var GET = "http://google.com/#q=" + UserSearchQuery;
    	window.open(GET, '_blank');
    },
    getInitialState: function() {
        return { value: '' };
    },

    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    //rendering the html elements with the state.clock
    render: function() {
        return (
            <div className="google_search">
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Type here to search google" name="google_search_input" id="google_search_input">
                </input>
                <span onClick={this.GetValueFromGoogleSearchInput} className="input-group-btn"><span className="glyphicon glyphicon-search" aria-hidden="true" ></span></span>
            </div>
        );
    }
}); 
//rendering with react to put onto the html
module.exports = GoogleSearchBox;
