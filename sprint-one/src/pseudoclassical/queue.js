var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.instance = {};
  this.counter = 0;
};

Queue.prototype.size = function() {
  return this.counter;
};

Queue.prototype.enqueue = function(value) {
  this.instance[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    var valueToDequeue = this.instance[0];
    delete this.instance[0];
    this.shift();
    this.counter--;
    return valueToDequeue;
  } else {
    this.counter = 0;
  }
};

Queue.prototype.shift = function() {
  for (var key in this.instance) {
    this.instance[key - 1] = this.instance[key];
  }
  delete this.instance[this.counter - 1];
};