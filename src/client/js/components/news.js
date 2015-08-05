/** @jsx React.DOM */
var React = require('../../../../node_modules/react/react.js');

// react component NewsBox will return news items from a news url that updates every 2 seconds seconds and appends it to a div with an id of 'news_box'

//news is the lowest level of the news component and is the inner most html div and is where the news info gets displayed
var News = React.createClass({
  render: function() {
    return (
      <div>
        <h4 className="list-group-item-heading">
          {this.props.title}
        </h4>
        <p className="list-group-item-text">
          {this.props.content}
        </p>
      </div>
    );
  }
});

//newsList is the list of news comopents ( this hosts the news html elements)
var NewsList = React.createClass({
  render: function() {
    var listNodes = this.props.data.map(function (news) {
      return (
        <a href="#" className="list-group-item">
          <News content={news.content} title={news.title}>
          </News>
        </a>
      );
    });
    return (
      <div>
        {listNodes}
      </div>
    );
  }
});

//this is the highest level of the newsBox components  and is where everything gets called from
var NewsBox = React.createClass({

  //this ajax function will get the data in the form of json from the server
  loadNewsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  //this sets the initial state of the data to an empty list
  getInitialState: function() {
    return {data: []};
  },

  // This sets the refreshing time for this component (passed in using props)
  componentDidMount: function() {
    this.loadNewsFromServer();
  },

  //this will render it all together using react
  render: function() {
    return (
      <div className="list-group">
        <NewsList data={this.state.data}  />
      </div>
    );
  }
}); 

//this is the final function there react renders the code and puts it all into the html
module.exports = {
  NewsBox : NewsBox,
  NewsList : NewsList,
  News : News
};
