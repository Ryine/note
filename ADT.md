### 链表
find: O(N)
findKth: O(N)
delete: O(N)
insert: O(1)

### 数组
find: O(N)
findKth: O(1)
delete: O(N)
insert: O(N)

### 栈(后进先出表)
#### 栈的链表实现
push: O(1)
pop: O(1)
top: O(1)
#### 栈的数组实现
push: O(1)
pop: O(1)
top: O(1)

### 队列(先进先出表)
enqueue: O(1)
dequeue: O(1)

### 二叉堆
O(log N)
性质
结构性质:完全二叉树
堆序性质:对于每一个节点X，X的父亲中的关键字小于或等于X中的关键字
基本操作:Insert,DeleteMin

## 树
深度:根到任意节点的唯一路径长
高:节点到一片树叶的最长路径长

### 二叉树
树的遍历：
先序遍历（节点-左-右）
后序遍历（左-右-节点）
中序遍历（左-节点-右）
广度优先遍历

### 二叉查找树
平均深度O(log N)