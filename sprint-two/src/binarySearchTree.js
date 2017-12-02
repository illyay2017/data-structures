var BinarySearchTree = function(value) {
  var newTree = {};
  //create a new tree
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  newTree.insert = function(value) {
    var parentNode = this;
    if (value < parentNode.value) {
       if(parentNode.left === null) {
         parentNode.left = BinarySearchTree(value);
       } else {
         parentNode.left.insert(value);
       }
    } else if (value > parentNode.value) {
       if(parentNode.right === null) {
         parentNode.right = BinarySearchTree(value);
       } else {
         parentNode.right.insert(value);
       }
    } else {
       if(parentNode.right === null) {
         parentNode.right = BinarySearchTree(value);
       } else {
         parentNode.right.insert(value);
       }
    }
  };

  newTree.contains = function(value) {
    var parentNode = this;
    if (value < parentNode.value) {
       if(parentNode.left === null) {
         return false;
       } else {
         return parentNode.left.contains(value);
       }
    } else if (value > parentNode.value) {
        console.log('im here!');
       if(parentNode.right === null) {
         return false;
       } else {
         return parentNode.right.contains(value);
       }
    } else {
      return true;
    }
  };
  
  newTree.depthFirstLog = function(cb) {
    var parentNode = this;
    cb(parentNode.value)
    if (parentNode.left !== null) {
      parentNode.left.depthFirstLog(cb);
    }
    if (parentNode.right !== null) {
      parentNode.right.depthFirstLog(cb);
    }
  };
  
  return newTree;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
