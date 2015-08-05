//this is important for when you import your component
jest.dontMock('../src/client/js/components/news.js');

// unit test for dateTime component
describe('news', function() {
    it('get the news and put it into a list of divs', function() {

        //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');

        // this stage is important to link to the correct sub component
        var News = require('../src/client/js/components/news.js').News;
        var TestUtils = React.addons.TestUtils;

        //dummy data for test
        var title = "News Title"
        var content = "I'm the news content"

        //instance of react component
        var news_comp = TestUtils.renderIntoDocument(
            <News content={content} title={title} />
        );
        
        //setting the expected variable here for readability
        var expected = [title, content];

        //getting the rendered component with the class you want to look in
        //here i had used the element with the class with the title in it
        var news_box_title_rendered = TestUtils.findRenderedDOMComponentWithClass (
            news_comp, 'list-group-item-heading');

        //here i have used the element with the class with the content in it
        var news_box_content_rendered = TestUtils.findRenderedDOMComponentWithClass (
            news_comp, 'list-group-item-text');

        //AssertEqual (compare what you are expecting with what you actually have)
        //expect the title
        expect(news_box_title_rendered.getDOMNode().textContent).toEqual(expected[0]);

        //expect the content
        expect(news_box_content_rendered.getDOMNode().textContent).toEqual(expected[1]);
    });
});