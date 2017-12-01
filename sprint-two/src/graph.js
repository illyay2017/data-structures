

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.totalNodes = 0;
  // this.value = null;
  // this.edge = null;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push the node value and edge into the graph
  var nodeObj = {};
  nodeObj.value = node;
  nodeObj.edges = {};
  this.nodes[this.totalNodes] = nodeObj;
  this.totalNodes++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  // Iterate over every node in the storage until the target node was found
  // if the node is not found return false at the very end
  for (var key in this.nodes) {
    return this.nodes[key].value === node;
  } 
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
this is the new remove
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
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
