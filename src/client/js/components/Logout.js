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
        <div className="LogoutUserInfo">{user.email}</div>     
      );
    });

    return (
      <div>{userInfo}</div>
    );
  }  
});


var Logout = React.createClass({
  //renders the html
  render: function() {
    return (
      <div className="Logout">
        <a href="http://iam.cip-dev.canopy-cloud.com/openam/XUI/#logout/&realm=/ActiveDirectory&forward=true&goto=%2FSSORedirect%2FmetaAlias%2FActiveDirectory%2Fidp%3FReqID%3D_c5ef7031460b57c14447%26index%3Dnull%26acsURL%3Dhttp%253A%252F%252F52.25.236.103%253A3000%252Flogin%252Fcallback%26spEntityID%3Dpassport-saml%26binding%3Durn%253Aoasis%253Anames%253Atc%253ASAML%253A2.0%253Abindings%253AHTTP-POST&AMAuthCookie=">Logout</a>
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