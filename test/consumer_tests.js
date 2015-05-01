var consumer = require('../consumer')
  , request = require('supertest')
  , assert = require("assert");

describe('req', function(){
  describe('.xhr', function(){
    it('should return 400 with no equasion', function(done){
      request(consumer.app)
      .get('/')
      .expect(400)
      .end(function(err, res){
        done(err);
      })
    });
    it('should return 400 with a missing equal character', function(done){
      request(consumer.app)
      .get('/1+2')
      .expect(400)
      .end(function(err, res){
        done(err);
      })
    });
    it('should return 200 with an equasion', function(done){
      request(consumer.app)
      .get('/1+2=')
      .expect(200)
      .end(function(err, res){
        assert.equal(JSON.parse(res.res.text)['answer'], 3);
        done(err);
      })
    });
  })
})