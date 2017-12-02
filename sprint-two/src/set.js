var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.storage[item] === undefined) {
    this.storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this.storage[item] !== undefined;
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
