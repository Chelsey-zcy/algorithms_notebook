class Stack {
  private items: number[]
  constructor () {
    this.items = []
  }

  push(value: number): void {
      this.items.push(value)
  }

  pop(): number | null {
      return this.items.length > 0 ? this.items.pop()! : null
  }

  peek(): number | null {
      if (this.items.length > 0) {
        return this.items[this.items.length - 1]
      } else {
        return null
      }
  }

  empty(): boolean {
      return this.items.length === 0 
  }

}