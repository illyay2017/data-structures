var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(obj, base) {
  for (var key in base) {
    obj[key] = base[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  childTree.parent = this;
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  return _.some(this.children, function(ele) {
    return ele.contains(target);  
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
