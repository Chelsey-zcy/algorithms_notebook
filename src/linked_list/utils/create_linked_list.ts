export class ListNode {
  val: number;
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

export function createLinkedList(values: number[], loopIndex : number | null = null): ListNode | null {
  if (values.length === 0) return null
  let head = new ListNode(values[0])
  let current = head;
  let loopNode: ListNode | null = null

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i])
    current = current.next
    if (loopIndex === i) {
      loopNode = current
    }
  }

  if (loopNode) {
    current.next = loopNode
  }

  return head
}

let linearList = createLinkedList([1, 2, 3, 4, 5]);
let loopedList = createLinkedList([1, 2, 3, 4, 5], 2);