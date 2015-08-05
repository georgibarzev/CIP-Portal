//this is important for when you import your component
jest.dontMock('../src/client/js/components/tiles.js');

//dummy json tile data to test with.
var data = [
                {
                    "url": "https://login.microsoftonline.com/",
                    "description": "Microsoft's online messaging and collaboration platform",
                    "img": "http://tiles-api.herokuapp.com/img/Office_256.png",
                    "backgroundcolour": "#006398",
                    "name": "Office 365"
                },
                {
                    "url": "https://accounts.google.com/ServiceLogin?Email=jenny.bates@portal.canopy-cloud.com",
                    "description": "Google's online messaging and collaboration platform",
                    "img": "http://tiles-api.herokuapp.com/img/gmail_256.png",
                    "backgroundcolour": "#006398",
                    "name": "Google Apps"
                },
                {
                    "url": "/#/cloud-fabric",
                    "description": "Canopy's PaaS Solution",
                    "img": "http://tiles-api.herokuapp.com/img/Fabric.png",
                    "backgroundcolour": "#006398",
                    "name": "Cloud Fabric"
                },
                {
                    "url": "https://demo.compose.canopy-cloud.com/",
                    "description": "Canopy's IaaS Orchestratration Tool",
                    "img": "http://tiles-api.herokuapp.com/img/Compose_blue.png",
                    "backgroundcolour": "#006398",
                    "name": "Compose"
                }
            ] 


// unit test for dateTime component
describe('TileList', function() {
    it('takes json and creates a list of tiles from it', function() {
        
        //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        // this stage is important to link to the correct sub component
        var TileList = require('../src/client/js/components/tiles.js').TileList;
        var TestUtils = React.addons.TestUtils;

        //instance of your react component
        var tiles_comp = TestUtils.renderIntoDocument(
            <TileList data={data} />
        );

        //setting the expected variable here for readability
        var expected = "";

        //adding all the expected text into the expected variable
        for (var item in data) expected += data[item]["name"];


        //getting the rendered component with the class of what you want 
        //(make sure is the upper most class if getting all)
        var tiles_rendered = TestUtils.findRenderedDOMComponentWithClass(
            tiles_comp, 'tileList');

        //AssertEqual (compare what you are expecting with what you actually have)
        //getting all text content in the component
        expect(tiles_rendered.getDOMNode().textContent).toEqual(expected);
        
    });
});
