var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
  //create variable deque = someInstance[0]
    var deque = someInstance[0];
  //delete the last and first value of the someInstance
    delete someInstance[0];
  //create new method to shift the counter
    
    this.shift();
    return deque;
  };

  someInstance.shift = function() {
//decrementing the value of counter 
    for (var key in someInstance) {
      someInstance[key - 1] = someInstance[key];
    }
    delete someInstance[counter - 1];
  }


  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};

var testQueue = new Queue();
testQueue.enqueue('a');
testQueue.enqueue('b');
console.log('before we pop an element, our object looks like this: ' + JSON.stringify(testQueue));
testQueue.dequeue();
console.log('after we pop an element, our object looks like this: ' + JSON.stringify(testQueue));