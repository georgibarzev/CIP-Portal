//this is important for when you import your component
jest.dontMock('../src/client/js/components/Logout.js');

//unit test for Logout component
describe('Logout', function() {
    it('Will Send info to removed logged in session.', function() {

    	//set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        // this stage is important to link to the correct sub component
        var Logout = require('../src/client/js/components/Logout.js').Logout;
        var TestUtils = React.addons.TestUtils;

        //rendered component
        var LogoutComp = TestUtils.renderIntoDocument(
            <Logout  />
        );

        var Expected = "Logout";
        var ExpectedURL = "/logout/";

        //getting the rendered component with the class you want to look in
        var LogoutRenderedWithClass = TestUtils.findRenderedDOMComponentWithClass (
            LogoutComp, 'Logout');

        //Creating a html object to be able to find attributes inside.
        var HTMLObject= document.createElement('div');

        console.log(HTMLObject);
        console.log(LogoutRenderedWithClass.getDOMNode().innerHTML);

        //setting the innerHTML to the rendered html from react
        HTMLObject.innerHTML = LogoutRenderedWithClass.getDOMNode().innerHTML;

        console.log(HTMLObject);

        //Assert Equal checking that the text is being rendered
        expect(LogoutRenderedWithClass.getDOMNode().textContent).toEqual(Expected);

        //Assert Equal to get the href to see it is putting the correct url in the html
        expect(HTMLObject.getElementsByTagName('a')[0].getAttribute("href").toString()).toEqual(ExpectedURL);
	});
});