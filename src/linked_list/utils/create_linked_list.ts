export class ListNode {
  val: number;
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

export function createLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) return null
  let head = new ListNode(values[0])
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i])
    current = current.next
  }

  return head
}