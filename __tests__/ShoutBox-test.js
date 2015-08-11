//this is important for when you import your component

jest.dontMock('../src/client/js/components/ShoutBox.js');

var data = [{
                "user_name": "someEmail@canopy-cloud.com",
                "message": "This is a React and Node Component / Microservice!",
           }];
           

//unit test for Logout component
describe('ShoutBox', function() {
    it('Checking The ShoutBox is rendering sub-components', function() {

        //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        // this stage is important to link to the correct sub component
        var ShoutBox = require('../src/client/js/components/ShoutBox.js').ShoutBox;
        var TestUtils = React.addons.TestUtils;

        var Expected = '"' + data[0]["message"] + '" - ' + data[0]["user_name"];
        var ExpectedLength = 1;

        //rendered component
        var ShoutBoxComp = TestUtils.renderIntoDocument(
            <ShoutBox data={data} />
        );

        //getting the rendered component with the class you want to look in
        var ShoutBoxRenderedWithClass = TestUtils.findRenderedDOMComponentWithClass (
            ShoutBoxComp, 'shout_box');

        var HTMLObject= document.createElement('div');

        //setting the innerHTML to the rendered html from react
        HTMLObject.innerHTML = ShoutBoxRenderedWithClass.getDOMNode().innerHTML;

        //Assert Equal checking that the text is being rendered
        expect(parseInt(HTMLObject.getElementsByTagName('input').length)).toEqual(ExpectedLength);
        expect(HTMLObject.getElementsByTagName('input')[0].getAttribute("value").toString()).toEqual(Expected);

    });
});
