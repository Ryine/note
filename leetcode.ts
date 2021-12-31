class ListNode {
  public next: ListNode | null = null
  public prev: ListNode | null = null
  public key
  public value
  constructor (key: string | number, value) {
    this.key = key
    this.value = value
    // this.next = null
    // this.prev = null
  }
}
class DoubleList {
    private head: ListNode | null = null
    private tail: ListNode | null = null
    public size = 0
    // 在链表头部添加节点 x，时间 O(1)
    addFirst (node: ListNode) {
      if (!this.head) {
        this.head = this.tail = node
      } else {
        node.next = this.head
        this.head.prev = node
        this.head = node
      }
      this.size++
    }

    // 删除链表中的 x 节点（x 一定存在）
    // 由于是双链表且给的是目标 Node 节点，时间 O(1)
    remove (node: ListNode) {
      if (node === this.head) {
        this.head = this.head.next
      } else if (node === this.tail) {
        this.tail = this.tail.prev
      } else {
        node.prev.next = node.next
        node.next.prev = node.prev
      }
      this.size--
    }

    // 删除链表中最后一个节点，并返回该节点，时间 O(1)
    removeLast () {
      if (!this.tail) {
        return null
      }
      const node = this.tail
      this.remove(node)
      return node
    }
}
interface Hash {
  [key: string | number]: ListNode
}
class LRUCache {
  private hash: Hash = {}
  private capacity: number
  public cache = new DoubleList()
  constructor (capacity: number) {
    this.capacity = capacity
  }

  get (key: string | number) {
    const node = this.hash[key]
    if (!node) return -1
    // 将node移至链表头部
    this.cache.remove(node)
    this.cache.addFirst(node)
    return node.value
  }

  put (key: string | number, value) {
    let node = this.hash[key]
    if (!node) {
      // 新增节点
      node = new ListNode(key, value)
      this.hash[key] = node
      this.cache.addFirst(node)
      // 溢出
      if (this.capacity < this.cache.size) {
        const last = this.cache.removeLast()
        last && delete this.hash[last.key]
      }
    } else {
      // 将node移至链表头部
      node.value = value
      this.cache.remove(node)
      this.cache.addFirst(node)
    }
  }
}
