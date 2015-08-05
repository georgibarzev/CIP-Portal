/** @jsx React.DOM */
var React = require('../../../../node_modules/react/react.js');
var $ = require('../../../../node_modules/jquery/dist/jquery.min.js');
//This TileBox component will put tiles into the html for the user.
var TileBox = React.createClass({

  //This function loads the tiles in the form of a json from a url
  loadTilesFromServer: function() {
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

  //setting the initial state to an empty list
  getInitialState: function() {
    return {data: []};
  },

  //This sets the refreshing time for this component (passed in using props)
  componentDidMount: function() {
    this.loadTilesFromServer();
    setInterval(this.loadTilesFromServer, this.props.pollInterval);
  },
  //renders the html
  render: function() {
    return (
      <div className="tileBox">
        <div id="tileTitle">Services</div>
        <TileList data={this.state.data} />
      </div>
    );
  }
});

//TileList is the list of news comopents (this hosts the news html elements)
var TileList = React.createClass({
  render: function() {  

    var tileNodes = this.props.data.map(function (tile) {
      return (
      <Tile name={tile.name} description={tile.description} url={tile.url} img={tile.img} backgroundcolour={tile.backgroundcolour}> </Tile>
      );
    });
    
    return (
      <div className="tileList">
      {tileNodes}
      </div>
    );
  }
});

//Tile is the lowest level of the tile component and is the inner most html div and is where the tile info gets displayed
var Tile = React.createClass({

  render: function() {

    return (
    <a href={this.props.url}>
    <div className="tile"  style={{backgroundColor: this.props.backgroundcolour, backgroundImage: 'url(' + this.props.img  + ')'}} >
    
        {this.props.name}

    </div></a>
    );
  }
});

//rendering the react to the html
module.exports = {
  TileBox : TileBox,
  TileList : TileList,
  Tile : Tile
};
