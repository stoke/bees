var plugins = {
  "return": require('./plugins/return'),
  "param" : require('./plugins/param')
};

exports.parse = function bees(file) {
  var matches = file.match(/\/\*{1,2}(.|\n)+?\*\//g),
      json    = [];
  
  matches.map(function(m) {
    
    var sub = {};
    
    m = m.split('\n');
    m.pop();
    m.shift();
    
    m.map(function(i) {
      
      i = i.replace(/\*/g, '')
           .trim();

      if(!i.length) return;
            
      if(~i.indexOf('@')) {
        var cmd = i.match(/@(\w+)\s([\W\w]+)?/);
        cmd.shift();
        
        if(plugins[cmd[0]]) {
          plugins[cmd[0]](cmd, sub);
        }
        
      }
      else {
        i = i.split(' ');
        sub.method = i[0];
        sub.path   = i[1];
      }
    });
    
    json.push(sub);
  });

  return json;
};

exports.use = function(name, fn) {
  plugins[name] = fn;
};