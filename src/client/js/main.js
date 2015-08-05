/** @jsx React.DOM */
var React = require('react');

// Not ideal to use createFactory, but don't know how to use JSX to solve this
// Posted question at: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
var DateBox = require('./components/DateBox.js');
var NewsBox = require('./components/news.js').NewsBox;
var TileBox = require('./components/tiles.js').TileBox;

React.render(
  <DateBox />,
  document.getElementById('date_box')
);

React.render(
  <NewsBox url="news/" />,
  document.getElementById('news_box')
);

React.render(
  <TileBox url="tiles/" />,
  document.getElementById('tiles_box')
);
