

// Instantiate a new graph
var Graph = function() {
  // this.nodes = [];
  this.nodes = {};
  // this.totalNodes = 0;
  // // this.value = null;
  // // this.edge = null;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {
    value: node,
    edges: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] === undefined) {
    return false;
  }
  return true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node] !== undefined) {
    delete this.nodes[node];
  }
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeEdges = this.nodes[fromNode].edges;
  var toNodeEdges = this.nodes[toNode].edges;
  return toNodeEdges.indexOf(this.nodes[fromNode].value) > -1;
};

// Connects two nodes in a graph by adding an edge betwesen them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(this.nodes[toNode].value);
  this.nodes[toNode].edges.push(this.nodes[fromNode].value);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeEdges = this.nodes[fromNode].edges;
  var fromNodeIndex = fromNodeEdges.indexOf(this.nodes[toNode].value);
  var toNodeEdges = this.nodes[toNode].edges;
  var toNodeIndex = toNodeEdges.indexOf(this.nodes[fromNode].value);

  fromNodeEdges.splice(fromNodeIndex, 1);
  toNodeEdges.splice(toNodeIndex, 1);
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
