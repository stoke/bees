var bees = module.exports = function(file) {
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
        
        switch(cmd[0]) {
          case 'param':
            var datas = cmd[1].match(/(\w+)\s([\W\w]+)?/)
            datas.shift();
            
            sub.params = sub.params || {};
            sub.params[datas[0]] = datas[1];
            break;
          case 'return':
            sub.return = cmd[1];
            break;
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