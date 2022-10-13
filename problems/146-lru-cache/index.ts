class ListNode {
  key: number;
  next: ListNode | null;
  last: ListNode | null;
  constructor(key: number) {
    this.key = key;
    this.next = null;
    this.last = null;
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
      const [firstKey] = this.cache.keys();
      // for TS check
      this.cache.delete(~~firstKey);
    }
    this.cache.set(key, value);
  }
}
