//jest.dontMock('../src/client/js/components/news.js');

// unit test for dateTime component
describe('news', function() {
    it('get the news and put it into a list of divs', function() {

        //set up (importing needed modules and libarys)
        var React = require('../node_modules/react/addons');
        var NewsBox = require('../src/client/js/components/news.js').News;
        var TestUtils = React.addons.TestUtils;

        var title = "News Title"
        var content = "I'm the news content"

        //instance of react component
        var news_comp_title = TestUtils.renderIntoDocument(
            <NewsBox title={title}/>
        );
        
        // var news_comp_content = TestUtils.renderIntoDocument(
        //     <NewsBox content={content}/>
        // );
        // function test(component){
        //     return true;
        // };
        
        //expected result
        var expected_title = title;
        var expected_content = content;

        //getting the rendered component with the html element you want to look in
        var news_box_title_rendered = TestUtils.scryRenderedDOMComponentsWithClass (
            news_comp_title, 'list-group-item-heading');

        console.log("here:");
        console.log(news_box_title_rendered);
        // console.log(news_box_content_rendered);

        //AssertEqual (compare what you are expecting with what you actually have)
        expect(news_box_title_rendered[0].getDOMNode().textContent).toEqual(expected_title);
        // expect(news_box_content_rendered[0].getDOMNode().textContent).toEqual('please fail');
    });
});