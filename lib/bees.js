var bees = module.exports = function(file) {
  var matches = file.match(/\/\*{1,2}(.|\n)+?\*\//g);
  var json = [];
  
  matches.map(function(m) {
    m = m.split('\n');
    m.pop();
    m.shift();
    
    var sub = {};
    
    m.map(function(i) {
      
      i = i.replace(/\*/g, '').trim();
      if(i === '') return;
            
      if(~i.indexOf('@')) {
        sub.params = sub.params || {};
        var option = i.match(/@(\w+)\s([\W\w]+)?/);
        switch(option[1]) {
          case 'param':
            var inside = option[2].match(/(\w+)\s([\W\w]+)?/);
            sub.params[inside[1]] = inside[2];
            break;
          case 'return':
            sub.return = option[2];
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
  console.log(JSON.stringify(json));
  return JSON.stringify(json);
};