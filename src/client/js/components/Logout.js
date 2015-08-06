/** @jsx React.DOM */
var React = require('../../../../node_modules/react/react.js');

//This TileBox component will put tiles into the html for the user.
var LogoutBox = React.createClass({
  //renders the html
  render: function() {
    return (
      <div className="LogoutBox">
        <LogoutUserInfoBox data={this.props.data} />
        <Logout />
      </div>
    );
  }  
});


var LogoutUserInfoBox = React.createClass({
  //renders the html
  render: function() {

    var userInfo = this.props.data.map(function (user) {
      return (
        <span> {user.email} </span>     
      );
    });

    return (
      <div className="LogoutUserInfo"> {userInfo} </div>
    );
  }  
});


var Logout = React.createClass({
  //renders the html
  render: function() {
    return (
      <div className="Logout">
        <a href="/logout/">Logout</a>
      </div>
    );
  }  
});

//rendering the react to the html
module.exports = {
  LogoutBox : LogoutBox,
  LogoutUserInfoBox : LogoutUserInfoBox,
  Logout : Logout
};