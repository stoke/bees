var fs   = require('fs'),
    bees = exports;

var plugins = {
  '@param': require('./plugin/param'),
  '@path' : require('./plugin/path'),
  '@descr': require('./plugin/descr')
};

bees.load = function(file) {
  return fs.readFileSync(file, 'utf-8');
};

bees.parse = function(file) {
  var blocks = file.match(/\/\* @api[\w\W*]+?\*\//g) || [],
      config = [];

  blocks.forEach(function(api) {
    var path = {};

    api = api.split('\n'); 
    api.shift();
    api.pop();

    api = api.map(function(x) {
      var match = x.match(/@([\w\W]+?;)/) || [];
      return match.shift() || "";
    });
    
    (function every(list) {
      var item = list.shift();

      if(!item) return;
      
      item = item.replace(/[.*\n]/g, '').split(' ');
      
      var cmd = item.shift();
      
      if(plugins[cmd]) {
        plugins[cmd](path, item);
      }
      
      every(list);
    })(api.join('\n').split(';'));
    
    config.push(path);

  });
  
  return config;
};

bees.use = function(name, fn) {
  plugins[name] = fn;
}
