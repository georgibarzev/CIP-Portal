var chai = require('chai');
var sinon =  require('sinon')
var app = require('../../app.js');
var Promise = require('bluebird');

describe('It should test the news api', function(){

  beforeEach(function(done) {
    sandbox = sinon.sandbox.create();
    done();
  });
  
  it('should get the list of news', function(done){
    sandbox.stub(app.api.news, 'requestNews').returns(Promise.resolve([{ "statusCode": 200, "body": [ {"title": "Title","content":"Content" } ] }]));    
    return app.api.news.list()
     .then(function(res) {
       chai.assert.isArray(res);
       chai.assert.equal(res[0].title,"Title");
       chai.assert.equal(res[0].content,"Content");
       done();      
     })
     .catch(function(err) {
       done(err); 
     });
    });
  });
