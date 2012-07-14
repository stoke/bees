module.exports = function(path, obj) {
  path.method = obj.shift();
  path.path   = obj.shift();
};
