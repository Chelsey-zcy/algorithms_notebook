class StackUsingQueue {
  private queue1: number[] = [];
  private queue2: number[] = [];

  push(value: number): void {
    this.queue1.push(value)
  }

  pop(): number {
    if (this.queue1.length === 0) throw new Error("Stack is empty")
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift()!)
    }
    const poppedValue = this.queue1.shift()!
    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    return poppedValue
  }

  peek(): number {
    if (this.queue1.length === 0) throw new Error("Stack is empty")
    return this.queue1[this.queue1.length - 1]
    }

  isEmpty(): boolean {
    return this.queue1.length === 0
  }
}
