module.exports = function(obj, arr) {
  obj.params = obj.params || {};

  var name = arr.shift(),
      type = arr.shift(),
      rest = arr.join(' ');

  obj.params[name] = {
    type: type,
    info: rest
  };
};
