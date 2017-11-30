var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var newInstance = {};
  newInstance.counter = 0;
  newInstance.storage = {};
  extend(newInstance, stackMethods);
  return newInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.size = function() {
  return this.counter;
};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    var itemToPop = this.storage[--this.counter];
    delete this.storage[this.counter];
    return itemToPop;
  } else {
    this.counter = 0;
  }
};