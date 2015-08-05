//this is important for when you import your component
jest.dontMock('../src/client/js/components/tiles.js');

// unit test for dateTime component
describe('tiles', function() {
    it('get tiles json and output tiles to html', function() {
        
        //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        // this stage is important to link to the correct sub component
        var TileBox = require('../src/client/js/components/tiles.js').Tile;
        var TestUtils = React.addons.TestUtils;

        //dummy info ( the name we will give to the tile for testing)
        var nameTile = "Compose";

        //instance of react component
        var tiles_comp = TestUtils.renderIntoDocument(
            <TileBox name ={nameTile} />
        );

        //expected result for readability being set to the same as the tile name
        var expected = nameTile;

        //getting the rendered component with the class you want to look in
        var tiles_rendered = TestUtils.findRenderedDOMComponentWithClass(
            tiles_comp, 'tile');
        
        //AssertEqual (compare what you are expecting with what you actually have)
        //textContent gets all the text ( in this test it is getting the name which is Compose)
        expect(tiles_rendered.getDOMNode().textContent).toEqual(expected);
        
    });
});
