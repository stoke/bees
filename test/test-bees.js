var vows   = require('vows'),
    assert = require('assert'),
    bees   = require('../');

var example = require('fs').readFileSync('./test/app.js', 'utf-8');

vows
  .describe('bees.js')
  .addBatch(
    {
      'example.js': {
        topic: bees(example),
        'should return correct json': function(json) {
          assert.deepEqual(
            json,
            [
              {
                "method": "GET",
                "path": "/",
                "return": "Main page"
              },
              {
                "method": "GET",
                "path": "/:id",
                "params": {
                  "id": "id of the user"
                },
                "return": "user infos"
              }
            ]
          );
        }
      }
    })
  .export(module);