

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  // this.nodes = {};
  // this.totalNodes = 0;
  // // this.value = null;
  // // this.edge = null;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var node = {};
  node.value = value;
  node.edges = [];
  this.nodes.push(node);
  // push the node value and edge into the graph
  // var nodeObj = {};
  // nodeObj.value = node;
  // nodeObj.edges = {};
  // this.nodes[this.totalNodes] = nodeObj;
  // this.totalNodes++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    return this.nodes[i].value === node;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for (var key in this.nodes) {
  //   // if(this.nodes[key].value === node) {
  //   //   delete this
  //   // }
  // }
  // return false;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge betwesen them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var testGraph = new Graph();
testGraph.addNode('5');
console.log(testGraph);
