//this is important for when you import your component
jest.dontMock('../src/client/js/components/Logout.js');

//unit test for Logout component
describe('LogoutUserInfo', function() {
    it('display the user info (email).', function() {

     //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        // this stage is important to link to the correct sub component
        var LogoutUserInfoBox = require('../src/client/js/components/Logout.js').LogoutUserInfoBox;
        var TestUtils = React.addons.TestUtils;
        
        //dummy json tile data to test with.
        var data = [{
                "email": "jenny.bates@canopy-cloud.com",
         }];

        var ExpectedEmail = data[0]["email"];

        var LogoutUserInfoBoxComp = TestUtils.renderIntoDocument(
            <LogoutUserInfoBox data={data}/>
        );

        //getting the rendered component with the class you want to look in
        var LogoutUserInfoBoxRenderedWithClass = TestUtils.findRenderedDOMComponentWithClass (
            LogoutUserInfoBoxComp, 'LogoutUserInfo');

        //Assert Equal checking that the text is being rendered
        expect(LogoutUserInfoBoxRenderedWithClass.getDOMNode().textContent).toEqual(ExpectedEmail);

 });
});