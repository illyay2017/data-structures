var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //initiate count variable at 0;
  var count = 0;

  someInstance.push = function(value) {
    someInstance[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var poppedValue = someInstance[count - 1];
    delete someInstance[count - 1];
    count--;
    return poppedValue;
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    } else {
      return count;
    }
  };
  return someInstance;
};