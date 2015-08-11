/** @jsx React.DOM */
var React = require('react');
var moment = require('moment');

var GoogleSearchBox = require('./components/GoogleSearch.js');
var DateBox = require('./components/DateBox.js');
var NewsBox = require('./components/news.js').NewsBox;
var TileBox = require('./components/tiles.js').TileBox;
var LogoutBox = require('./components/Logout.js').LogoutBox;
var ShoutBox = require('./components/ShoutBox.js').ShoutBox;
console.log(document.getElementById('shout_box_container'));

var data = [{
      "email": "someEmail@canopy-cloud.com",
}];

var shoutbox_data = [{
      "user_name": "someEmail@canopy-cloud.com",
      "message": "This is the shoutbox!"
}];

React.render(
  <GoogleSearchBox />,
  document.getElementById('google_search_box')
);

React.render(
  <DateBox />,
  document.getElementById('date_box')
);


React.render(
  <NewsBox url="news/" />,
  document.getElementById('news_box')
);

React.render(
  <ShoutBox data={shoutbox_data} />,
  document.getElementById('shout_box_container')
);

React.render(
  <TileBox url="tiles/" />,
  document.getElementById('tiles_box')
);

React.render(
  <LogoutBox data={data} />,
  document.getElementById('logout')
);




