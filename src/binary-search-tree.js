const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
/*class Node {
  constructor(val) {
      this.value = val;
      this.right = null;
      this.left = null;
  }
}*/

class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }


    root() {
        if(!this.rootNode) return null;
        return this.rootNode;
      }
    
      add(value) {
        this.rootNode = addInTree(this.rootNode, value)
    
            function addInTree(node, value) {
                if(!node) {
                    return new Node(value);
                }

                if(node.data === value) {
                    return node;
                }
    
                if(value < node.data) {
                    node.left = addInTree(node.left, value)
                } else {
                    node.right = addInTree(node.right, value);
                }
                
                return node;
            }
      }
    
      has(value) {
        return searchInTree(this.rootNode, value)
        
            function searchInTree(node, value) {
                if(!node) {
                    return false;
                }
        
                if(node.data === value) {
                    return true;
                }
        
                return value < node.data ?
                searchInTree(node.left, value) : searchInTree(node.right, value);
            }
      }
    
      find(value) {
        return findInTree(this.rootNode, value);
        
        function findInTree(node, value) {
            if(!node) {
                return null;
            }
    
            if(node.data === value) {
                return node;
            }
    
            return value < node.data ?
            findInTree(node.left, value) : findInTree(node.right, value);
        }
      }
    
      remove(value) {
        this.rootNode = removeInTree(this.rootNode, value);
    
            function removeInTree(node, value) {
                if(!node) {
                    return null;
                }
    
                if(value < node.data) {
                    node.left = removeInTree(node.left, value);
                    return node;
                } else if (value > node.data) {
                    node.right = removeInTree(node.right, value);
                    return node;
                } else {
                    if(!node.left && !node.right) {
                        return null;
                    }
    
                    if(!node.left) {
                        node = node.right;
                        return node;
                    }
    
                    if(!node.right) {
                        node = node.left;
                        return node;
                    }
    
                    let temp = node.left;
                    while(temp.right) {
                        temp = temp.right;
                    }
                    node.data = temp.data;
                    node.left = removeInTree(node.left, value);
                    return node;
                }
            }
      }
    
      max() {
        if(!this.rootNode) {
          return null;
      }
    
      let node = this.rootNode;
      while(node.right != null) {
          node = node.right;
      }
      return node.data;
    }
    
      min() {
        if(!this.rootNode) {
          return null;
      }
    
      let node = this.rootNode;
      while(node.left != null) {
           node = node.left;
      }
      return node.data;
      }
}

module.exports = {
  BinarySearchTree
};