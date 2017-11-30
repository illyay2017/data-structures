var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.counter = 0;
  return instance;
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
    var valueToPop = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter--;
    return valueToPop;
  } else {
    this.counter = 0;
  }
};
