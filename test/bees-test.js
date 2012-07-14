var bees = require('../');

describe('bees', function() {

  describe('#load()', function() {

    it('should load a file', function() {
      bees.load(__dirname + '/file').should.be.a('string');
    });

  });

  describe('#parse()', function() {
    it('should parse a file correctly', function() {
      var res = bees.parse(bees.load(__dirname + '/file'));
      var parsed =
        [
          { method: 'GET', path: '/lol/:id', description: 'hi' },
          { 
            method: 'GET',
            path: '/lol/:id',
            description: 'hai',
            params: { id: { type: 'string', info: 'id of the user' } } 
          }
        ];
      JSON.stringify(res).should.equal(JSON.stringify(parsed));
    });
  });

});
