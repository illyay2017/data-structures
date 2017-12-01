var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  //when new nodes are added, make the tail equal to the new node?
    var nodeValue = Node(value);
    if (list.head === null) {
      list.tail = nodeValue;
      list.head = nodeValue;
    } else {
      list.tail.next = nodeValue;
      list.tail = nodeValue;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
