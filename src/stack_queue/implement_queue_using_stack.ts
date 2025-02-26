class MyQueue {
  private inStack: number[] = [];
  private outStack: number[] = [];

  push(x: number): void {
      this.inStack.push(x)
  }

  pop(): number | undefined {
      if (this.outStack.length === 0) {
          while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop()!)
          }
      }
      return this.outStack.pop()
  }

  peek(): number | undefined {
      if (this.outStack.length > 0) {
          return this.outStack[this.outStack.length - 1]
      }
      return this.inStack.length > 0 ? this.inStack[0] : undefined
  }

  empty(): boolean {
      return this.inStack.length === 0 && this.outStack.length === 0
  }
}