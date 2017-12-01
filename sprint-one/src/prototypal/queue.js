var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.counter = 0;
  return instance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.counter;
};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    var valueToDequeue = this.storage[0];
    delete this.storage[0];
    
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }

    delete this.storage[this.counter - 1];

    this.counter--;    
    return valueToDequeue;
  } else {
    this.counter = 0;
  }
};

