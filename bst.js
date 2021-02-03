function Node(data,left,right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}
function BST() {
    this.root = null;
    this.insert = insert;
    this.remove = remove;
    this.findMin = findMin;
    this.find = find;
    
}
function insert(data) {
    var n = new Node(data,null,null);
    if(this.root == null) {
        this.root = n;
    }else {
        var T = this.root;
        var parent;
        while(T) {
            parent = T;
            if(data < T.data) {
                T = T.left;
                if(T == null) {
                    parent.left = n;
                    break;
                }
            }else {
                T = T.right;
                if(T == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
// 中序遍历
function inOrder(node) {
       if(!(node == null)) {
           inOrder(node.left);
           console.log(node.show());
           inOrder(node.right);
       }
}
 // 先序遍历 
function preOrder(node) {
       if(!(node == null)) {
           console.log(node.show());
           preOrder(node.left);
           preOrder(node.right);
        }
}
 // 后序遍历
function postOrder(node) {
    if(!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}
// 二叉树查找最小值
function findMin(){
    var T = this.root;
    while(!(T.left == null)) {
         T = T.left;
      }
    return T.data;
}
// 二叉树查找最大值
function findMax() {
    var T = this.root;
    while(!(T.right == null)) {
        T = T.right;
    }
    return T.data;
}
// 查找给定值
function find(data) {
    var T = this.root;
    while(T != null) {
        if(T.data == data) {
            return T;
        }else if(data < T.data) {
            T = T.left;
        }else {
            T = T.right;
        }
    }
    return null;
}
//二叉树查找最小值的节点
function getSmallest(node) {
   if (node.left == null) {
      return node;
   }
   else {
      return getSmallest(node.left);
   }
}

function remove(T,data) {
    if(T == null) {
        return null;
    }else if(data < T.data) {
        T.left = remove(T.left,data);
    } else if(data > T.data) {
        T.right = remove(T.right,data);
    }
    //有两个儿子
    else if(T.left && T.right) {
        var tmpCell = getSmallest(T.right);
        T.data = tmpCell.data;
        T.right = remove(T.right,tmpCell.data);
    } 
    //有零或一个儿子
    else {
        if(T.left == null) {
            T = T.right;
        } else if(T.right = null) {
            T = T.left;
        }
    }
    return T;

}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
preOrder(nums.root);