module.exports = function(cmd, sub) {
  var datas = cmd[1].match(/(\w+)\s([\W\w]+)?/)
  datas.shift();
            
  sub.params = sub.params || {};
  sub.params[datas[0]] = datas[1];
};