/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * - push(x) -- Push element x onto stack.
 * - pop() -- Removes the element on top of the stack.
 * - top() -- Get the top element.
 * - getMin() -- Retrieve the minimum element in the stack.
 */

/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push (x) {
    this.stack.push(x);

    const min = this.getMin();

    if (min !== undefined) {
      this.min.push(Math.min(x, min));
    } else {
      this.min.push(x);
    }
  }

  /**
   * @return {void}
   */
  pop () {
    this.stack.pop();
    this.min.pop();
  }

  /**
   * @return {number}
   */
  top () {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
  }

  /**
   * @return {number}
   */
  getMin () {
    if (this.min.length > 0) {
      return this.min[this.min.length - 1];
    }
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = [
  MinStack
]



