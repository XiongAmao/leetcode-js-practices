export class MinStack {
  stack: number[];
  min: number[];

  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val: number): void {
    this.stack.push(val);

    const minTop = this.getMin();
    this.min.push(
      Math.min(minTop === undefined ? Number.MAX_SAFE_INTEGER : minTop, val)
    );
  }

  // Methods pop, top and getMin operations will always be called on non-empty stacks.
  pop(): void {
    this.stack.pop();

    // if last push(min number), drop it
    // if not when push, repush to minStack
    this.min.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
