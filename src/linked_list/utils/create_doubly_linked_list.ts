export class DoublyListNode {
  val: number;
  next: DoublyListNode | null
  prev: DoublyListNode | null

  constructor(val: number, next? : DoublyListNode | null, prev?: DoublyListNode | null) {
    this.val = val
    this.next = next ?? null
    this.prev = prev ?? null
  }
}

function createDoublyLinkedList(arr: number[]): DoublyListNode | null {
  if (arr.length === 0) return null;

  let head = new DoublyListNode(arr[0])
  let cur = head

  for (let i = 1; i < arr.length; i++) {
    const newNode = new DoublyListNode(arr[i])
    cur.next = newNode
    newNode.prev = cur
    cur = newNode
  }
  return head
}