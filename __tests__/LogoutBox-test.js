//this is important for when you import your component
jest.dontMock('../src/client/js/components/Logout.js');

//dummy json tile data to test with.
var data = {
                "email": "someEmail@canopy-cloud.com",
   }

//unit test for Logout component
describe('LogoutBox', function() {
    it('Houses the logout section.', function() {

     //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        // this stage is important to link to the correct sub component
        var LogoutBox = require('../src/client/js/components/Logout.js').LogoutBox;
        var TestUtils = React.addons.TestUtils;


        var LogoutBoxComp = TestUtils.renderIntoDocument(
            <LogoutBox data={data}/>
        );

        var Expected = data['email'] + "Logout";

        //getting the rendered component with the class you want to look in
        var LogoutBoxRenderedWithClass = TestUtils.findRenderedDOMComponentWithClass (
            LogoutBoxComp, 'LogoutBox');

        expect(LogoutBoxRenderedWithClass.getDOMNode().textContent).toEqual(Expected);
 });
});