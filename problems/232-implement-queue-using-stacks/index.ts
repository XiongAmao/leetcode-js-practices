export class MyQueue {
  in: number[] = [];
  out: number[] = [];

  push(x: number): void {
    this.in.push(x);
  }

  pop(): number | undefined {
    if (this.out.length) {
      return this.out.pop();
    }
    while (this.in.length) {
      const x = this.in.pop();
      if (x) {
        this.out.push(x);
      }
    }
    return this.out.pop();
  }

  peek(): number | undefined {
    const x = this.pop();
    if (x) {
      this.out.push(x);
    }
    return x;
  }

  empty(): boolean {
    return !this.in.length && !this.out.length;
  }
}
