jest.dontMock('../src/client/js/components/DateBox.js');
jest.dontMock('../node_modules/moment/moment.js');

// unit test for dateTime component
describe('DateBox', function() {
    it('has a constantly updating time and date', function() {
        
        //set up (importing needed modules and libarys)
        var moment = require('../node_modules/moment/moment.js');
        var React = require('../node_modules/react/addons');
        var DateBox = require('../src/client/js/components/DateBox.js');
        var TestUtils = React.addons.TestUtils;

        //instance of react component
        var date_time = TestUtils.renderIntoDocument(
            <DateBox pollInverval={50000}/>
        );

        //expected result
        var expected = moment().format('MMMM Do YYYY, h:mm a');

        //getting the rendered component with the html element you want to look in
        var date_time_rendered = TestUtils.findRenderedDOMComponentWithTag(
            date_time, 'span');
	
        
        //AssertEqual (compare what you are expecting with what you actually have)
        expect(date_time_rendered.getDOMNode().textContent).toEqual(expected);
    });
});
