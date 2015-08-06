var chai = require('chai');
var sinon =  require('sinon')
var app = require('../../app.js');
var Promise = require('bluebird');

describe('It should test the tiles api', function(){

  beforeEach(function(done) {
    sandbox = sinon.sandbox.create();
    done();
  });
  
  it('should get the tiles', function(done) { 
    sandbox.stub(app.api.tiles, 'getTileData').returns(Promise.resolve([ {"url":"https://login.microsoftonline.com/","description":"Microsoft's online messaging and collaboration platform","img":"http://tiles-api.herokuapp.com/img/Office_256.png","backgroundcolour":"#006398","name":"Office 365"}]));
    return app.api.tiles.list()
     .then(function(res) {
       chai.assert.isArray(res);
       chai.assert.equal(res[0].url,"https://login.microsoftonline.com/");
       done();      
     })
     .catch(function(err) {
       done(err); 
      });
    });
  });
