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