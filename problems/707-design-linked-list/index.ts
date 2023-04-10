export class ListNode {
  next: ListNode | null = null;
  val: number;
  constructor(val = 0) {
    this.val = val;
  }
}

export class MyLinkedList {
  dummyHead: ListNode = new ListNode();
  size = 0;

  get(index: number): number {
    if (index > this.size - 1) {
      return -1;
    }

    let cur = this.dummyHead;
    // dummyHead 是 -1 索引
    while (index + 1) {
      if (cur.next) {
        cur = cur.next;
      }
      index--;
    }
    return cur.val;
  }

  addAtHead(val: number): void {
    const newNode = new ListNode(val);
    newNode.next = this.dummyHead.next;
    this.dummyHead.next = newNode;
    this.size++;
  }

  addAtTail(val: number): void {
    let cur = this.dummyHead;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = new ListNode(val);
    this.size++;
  }

  // 插入到index前，找index - 1位置
  addAtIndex(index: number, val: number): void {
    // 越界一位插到尾部
    if (index > this.size) {
      return;
    }
    let cur: ListNode | null = this.dummyHead;
    while (index) {
      if (cur) {
        cur = cur.next;
      }
      index--;
    }
    if (!cur) return;
    const newNode = new ListNode(val);
    newNode.next = cur.next;
    cur.next = newNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    // 下标越界，不做操作
    if (index > this.size - 1) {
      return;
    }
    let cur: ListNode | null = this.dummyHead;
    // 找index - 1位置，倒数循环，不包含0
    while (index) {
      if (cur) {
        cur = cur.next;
      }
      index--;
    }
    if (cur && cur.next) {
      cur.next = cur.next.next;
    }

    this.size--;
  }
}
