// a binary search tree (BST) is largely used in computer science.
// a binary search tree is a binary tree, but it only allows you to store nodes with lesser values on the left-hand side
// and nodes with greater values on the right-hand side.


// helper function to insert a new node
var insertNode = function(node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
};

// helper function that will receive node and the callback function
var inOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback);
    callback(node.key);
    inOrderTraverseNode(node.right, callback);
  }
};

// helper function 
var preOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    callback(node.key);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }
};

// helper function
var postOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    postOrderTraverseNode(node.left, callback);
    postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
}

var minNode = function(node) {
  if (node) {
    while (node && node.left !==null) {
      node = node.left;
    }

    return node.key;
  }

  return null;
};

var maxNode = function(node) {
  if (node) {
    while (node && node.right !== null) {
      node = node.right;
    }

    return node.key;
  }

  return null;
};

var searchNode = function(node, key) {
  if (node === null) {
    return false;
  }
  if (key < node.key) {
    return searchNode(node.left, key);
  } else if (key > node.key) {
    return searchNode(node.right, key);
  } else {
    return true;
  }
};

var removeNode = function(node, key) {
  if (node === null) {
    return null;
  }

  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else {  // key is equal to node.key

    // case 1 - a leaf node
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // case 2 - a node with only 1 child
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }

    // case 3: a node with 2 children
    var aux = findMinNode(node.right);
    node.key = aux.key; // replace node with the node of min value from the right rode.
    node.right = removeNode(node.right, aux.key);
    return node;
  }
};

var findMinNode = function(node) {
  while (node && node.left !== null) {
    node = node.left;
  }

  return node;
};

// the skeleton to represent each node (edge) in the tree 
function BinarySearchTree() {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  this.insert = function(key) {
    
    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };

  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  };

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };

  this.min = function() {
    return minNode(root);
  };

  this.max = function() {
    return maxNode(root);
  };

  this.search = function(key) {
    return searchNode(root, key);
  };

  this.remove = function(key) {
    root = removeNode(root, key);
  }
}


function printNode(value)  {
  console.log(value);
}

function x2(value) {
  console.log(value * 2);
}


// to use
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);


tree.inOrderTraverse(printNode);
console.log('-------------------------------');
tree.preOrderTraverse(printNode);
console.log('-------------------------------');
tree.postOrderTraverse(printNode);
console.log('-------------------------------');

console.log(tree.min());
console.log(tree.max());
console.log(tree.search(50)); // false
console.log(tree.search(11)); // true


















