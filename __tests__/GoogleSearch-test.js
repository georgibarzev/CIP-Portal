//this is important for when you import your component
jest.dontMock('../src/client/js/components/GoogleSearch.js');

// unit test for dateTime component
describe('GoogleSearch', function() {
    it('sends user to google with there search', function() {
        
        //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        //this component does not have a sub component
        var GoogleSearch = require('../src/client/js/components/GoogleSearch.js');
        var TestUtils = React.addons.TestUtils;

        //instance of react component
        var GoogleSearchBox = TestUtils.renderIntoDocument(
            <GoogleSearch />
        );

        //expected result is being returned from moment.js 
        //and formatted the same way it should be in the component
        var ExpectedLength = 1;

        //getting the rendered component with the html element you want to look in
        var GoogleSearchBoxRendered = TestUtils.findRenderedDOMComponentWithClass(
            GoogleSearchBox, 'google_search');
	
        var HTMLObject = document.createElement('div');

        HTMLObject.innerHTML = GoogleSearchBoxRendered.getDOMNode().innerHTML;

        //AssertEqual (compare what you are expecting with what you actually have)
        expect(parseInt(HTMLObject.getElementsByTagName('input').length)).toEqual(ExpectedLength);
    });
});
