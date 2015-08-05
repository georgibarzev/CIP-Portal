jest.dontMock('../src/client/js/components/tiles.js');

// unit test for dateTime component
describe('tiles', function() {
    it('get tiles json and output tiles to html', function() {
        
        //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');
        var TileBox = require('../src/client/js/components/tiles.js').Tile;
        var TestUtils = React.addons.TestUtils;

        var nameTile = "Compose";
        //instance of react component
        var tiles_comp = TestUtils.renderIntoDocument(
            <TileBox name ={nameTile} />
        );

        //expected result
        var expected = nameTile;

        //getting the rendered component with the html element you want to look in
        var tiles_rendered = TestUtils.findRenderedDOMComponentWithClass(
            tiles_comp, 'tile');
        
        //AssertEqual (compare what you are expecting with what you actually have)
        expect(tiles_rendered.getDOMNode().textContent).toEqual(expected);
        
    });
});
