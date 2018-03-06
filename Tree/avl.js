// Adelson-Velskii and Landi's tree (AVL tree)

var insertNode = function(node, element) {
  if (node === null) {
    node = new Node(element);
  } else if (element < node.key) {
    node.left = insertNode(node.left, element);

    if (node.left !== null) {
      // verify if balancing is needed
      if ((heightNode(node.left) - heightNode(node.right)) > 1) {
        // do rotations
        if (element < node.left.key) {
          node = rotationLL(node);
        } else {
          node = rotationLR(node);
        }
      }
    }
  } else if (element > node.key) {
    node.right = insertNode(node.right, element);

    if (node.right !== null) {
      // verify if balancing is needed.
      if ((heightNode(node.right) - heightNode(node.left)) > 1) {
        // do rotations
        if (element > node.right.key) {
          node = rotationRR(node);
        } else {
          node = rotationRL(node);
        }
      }
    }
  }

  return node;
};

var heightNode = function(node) {
  if (node === null) {
    return -1;
  } else {
    return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
  }
};

var rotationRR = function(node) {
  var tmp = node.right;
  node.right = tmp.left;
  tmp.left = node;
  return tmp;
};

var rotationLL = function(node) {
  var tmp = node.left;
  node.left = tmp.right;
  tmp.right = node;
  return tmp;
};

var rotationLR = function(node) {
  node.left = rotationRR(node.left);
  return rotationLL(node);
};

var rotationRL = function(node) {
  node.right = rotationLL(node.right);
  return rotationRR(node);
}











// helper function to insert a new node
// var insertNode = function(node, newNode) {
//   if (newNode.key < node.key) {
//     if (node.left === null) {
//       node.left = newNode;
//     } else {
//       insertNode(node.left, newNode);
//     }
//   } else {
//     if (node.right === null) {
//       node.right = newNode;
//     } else {
//       insertNode(node.right, newNode);
//     }
//   }
// };

// // helper function that will receive node and the callback function
// var inOrderTraverseNode = function(node, callback) {
//   if (node !== null) {
//     inOrderTraverseNode(node.left, callback);
//     callback(node.key);
//     inOrderTraverseNode(node.right, callback);
//   }
// };

// // helper function 
// var preOrderTraverseNode = function(node, callback) {
//   if (node !== null) {
//     callback(node.key);
//     preOrderTraverseNode(node.left, callback);
//     preOrderTraverseNode(node.right, callback);
//   }
// };

// // helper function
// var postOrderTraverseNode = function(node, callback) {
//   if (node !== null) {
//     postOrderTraverseNode(node.left, callback);
//     postOrderTraverseNode(node.right, callback);
//     callback(node.key);
//   }
// }

// var minNode = function(node) {
//   if (node) {
//     while (node && node.left !==null) {
//       node = node.left;
//     }

//     return node.key;
//   }

//   return null;
// };

// var maxNode = function(node) {
//   if (node) {
//     while (node && node.right !== null) {
//       node = node.right;
//     }

//     return node.key;
//   }

//   return null;
// };

// var searchNode = function(node, key) {
//   if (node === null) {
//     return false;
//   }
//   if (key < node.key) {
//     return searchNode(node.left, key);
//   } else if (key > node.key) {
//     return searchNode(node.right, key);
//   } else {
//     return true;
//   }
// };

// var removeNode = function(node, key) {
//   if (node === null) {
//     return null;
//   }

//   if (key < node.key) {
//     node.left = removeNode(node.left, key);
//     return node;
//   } else if (key > node.key) {
//     node.right = removeNode(node.right, key);
//     return node;
//   } else {  // key is equal to node.key

//     // case 1 - a leaf node
//     if (node.left === null && node.right === null) {
//       node = null;
//       return node;
//     }

//     // case 2 - a node with only 1 child
//     if (node.left === null) {
//       node = node.right;
//       return node;
//     } else if (node.right === null) {
//       node = node.left;
//       return node;
//     }

//     // case 3: a node with 2 children
//     var aux = findMinNode(node.right);
//     node.key = aux.key; // replace node with the node of min value from the right rode.
//     node.right = removeNode(node.right, aux.key);
//     return node;
//   }
// };

// var findMinNode = function(node) {
//   while (node && node.left !== null) {
//     node = node.left;
//   }

//   return node;
// };

// // the skeleton to represent each node (edge) in the tree 
// function BinarySearchTree() {
//   var Node = function(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   };

//   var root = null;

//   this.insert = function(key) {
    
//     var newNode = new Node(key);

//     if (root === null) {
//       root = newNode;
//     } else {
//       insertNode(root, newNode);
//     }
//   };

//   this.inOrderTraverse = function(callback) {
//     inOrderTraverseNode(root, callback);
//   };

//   this.preOrderTraverse = function(callback) {
//     preOrderTraverseNode(root, callback);
//   };

//   this.postOrderTraverse = function(callback) {
//     postOrderTraverseNode(root, callback);
//   };

//   this.min = function() {
//     return minNode(root);
//   };

//   this.max = function() {
//     return maxNode(root);
//   };

//   this.search = function(key) {
//     return searchNode(root, key);
//   };

//   this.remove = function(key) {
//     root = removeNode(root, key);
//   }
// }