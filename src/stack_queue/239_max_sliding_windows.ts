var maxSlidingWindow = function(nums, k): number[] {
  class Nomoqueue {
      private queue: number[]
      constructor () {
          this.queue = []
      }
      public enqueue (value: number): void {
          let n = this.queue.length
          while (n) {
               if ( this.queue[n - 1] < value) {
                  this.queue.pop()
               }
          }
          this.queue.push(value)
      }

      public dequeue (value: number): void {
          if (value === this.queue[0]) {
              this.queue.shift()
          }
      }

      public getMax (): number {
          return this.queue[0]
      }
  }

  let i = 0
  let helperQueue: Nomoqueue = new Nomoqueue()
  let ans: number[] = []
  while (i < k) {
      helperQueue.enqueue(nums[i])
  }
  ans.push(helperQueue.getMax())
  while (i = k, i < nums.length) {
      helperQueue.enqueue(nums[i])
      helperQueue.dequeue(nums[i - k])
      ans.push(helperQueue.getMax())
      }
  }
return ans

}
