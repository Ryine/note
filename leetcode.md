### LRU函数
```
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}
class DoubleList {
    private head, tail, size
    // 在链表头部添加节点 x，时间 O(1)
    public addFirst(Node x);

    // 删除链表中的 x 节点（x 一定存在）
    // 由于是双链表且给的是目标 Node 节点，时间 O(1)
    public remove(Node x);
    
    // 删除链表中最后一个节点，并返回该节点，时间 O(1)
    public removeLast();
    
    // 返回链表长度，时间 O(1)
    public size();
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.hash = {}
    this.cache = new DoubleList()
  }
  get (key) {}
  put (key, value) {}
}
```