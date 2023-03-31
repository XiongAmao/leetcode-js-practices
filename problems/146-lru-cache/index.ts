class ListNode {
  key: number;
  value: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LRUCacheWithMap {
  limit: number;
  cache: Map<number, number>;

  constructor(capacity: number) {
    this.limit = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    const val = this.cache.get(key);
    if (val !== undefined) {
      this.cache.delete(key);
      this.cache.set(key, val);
    }
    // for TS check
    return val !== undefined ? val : -1;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.limit) {
      // iterable destructuring assignment
      const iter = this.cache.keys();
      const firstKey = iter.next().value; // first
      // const [firstKey] = this.cache.keys();

      // for TS check
      this.cache.delete(~~firstKey);
    }
    this.cache.set(key, value);
  }
}

export class LRUCache {
  capacity: number;
  hash: Record<number, ListNode>;
  size: number;
  dummyHead: ListNode;
  dummyTail: ListNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.hash = {};
    this.size = 0;
    this.dummyHead = new ListNode(-1, -1);
    this.dummyTail = new ListNode(-1, -1);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key: number) {
    const node = this.hash[key];
    if (node === undefined) return -1;
    this.moveToHead(node);
    return node.value;
  }

  put(key: number, value: number) {
    const node = this.hash[key];
    if (node) {
      node.value = value;
      this.moveToHead(node);
    } else {
      if (this.size >= this.capacity) {
        this.removeLast();
      }
      const newNode = new ListNode(key, value);
      this.hash[key] = newNode;
      this.size++;
      this.addToHead(newNode);
    }
  }

  moveToHead(node: ListNode) {
    this.removeNode(node);
    this.addToHead(node);
  }
  addToHead(node: ListNode) {
    node.next = this.dummyHead.next;
    node.prev = this.dummyHead;
    const next = this.dummyHead.next;
    this.dummyHead.next = node;
    if (next) {
      next.prev = node;
    }
  }
  removeNode(node: ListNode) {
    const prev = node.prev;
    const next = node.next;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
  }
  removeLast() {
    const tail = this.dummyTail.prev;
    if (!tail) return;
    this.removeNode(tail);
    delete this.hash[tail.key];
    this.size--;
  }
}
