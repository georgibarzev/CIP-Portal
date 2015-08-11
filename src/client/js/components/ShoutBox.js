/** @jsx React.DOM */

var React = require('../../../../node_modules/react/react.js');

//This TileBox component will put tiles into the html for the user.
var ShoutBox = React.createClass({
  //renders the html
  render: function() {
    return (
      <div className="shout_box">
        <ShoutBoxInput data={this.props.data} />
      </div>
    );
  }  
});


var ShoutBoxInput = React.createClass({
  SendInfo: function(){
    var ShoutBox = document.getElementById("shout_box_input");
    var UserMessage = ShoutBox.value.toString();

    //Must use a diffrent way to get user in production!
    var Email = document.getElementsByClassName('LogoutUserInfo').innerHTML.toString();
    console.log("send to api: '"+UserMessage+" - "+Email+ "'");

  },
  getInitialState: function() {
        return { value: '"' + this.props.data[0]["message"] + '" - ' + this.props.data[0]["user_name"]};
  },
  handleChange: function(event) {
          this.setState({value: event.target.value});
  },

  //renders the html
  render: function() {

    return (
      <div className="shout_box_input">
      <input type="text" className="form-control" id="shout_box_input" value={this.state.value} onChange={this.handleChange}>
      </input> <span onClick={this.SendInfo} className="input-group-btn"><span className="glyphicon glyphicon-menu-right locator" aria-hidden="true"></span></span>
      </div>
    );
  }  
});




//rendering the react to the html
module.exports = {
  ShoutBox : ShoutBox,
  ShoutBoxInput : ShoutBoxInput
};