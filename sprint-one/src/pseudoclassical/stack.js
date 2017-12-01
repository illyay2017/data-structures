var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.instance = {};
  this.count = 0;
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.push = function(value) {
  this.instance[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    var valueToPop = this.instance[this.count - 1];
    delete this.instance[this.count - 1];
    this.count--;
    return valueToPop;
  } else {
    this.count = 0;
  }
};