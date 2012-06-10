bees (in Italian ```API``` means ```bees```)
====


Let the code write your docs D:

## Example: 

__app.js__
```javascript
var app = require('express').createServer();


/**
 * GET /
 * 
 * @return Main page
*/
app.get('/', function(req, res){
    res.send('Hello World');
});

/**
 * GET /:id
 * 
 * @param id id of the user
 * @return user infos
*/
app.get('/:id', function(req, res){
    res.send('Hello World');
});


app.listen(3000);
```

```
$ bees app.js
[
  {
    "method":"GET",
    "path":"/",
    "params":{},
    "return":"Main page"
  },
  {
    "method":"GET",
    "path":"/:id",
    "params":{
      "id":"id of the user"
    },
    "return":"user infos"
  }
]

```
