import { DoublyListNode } from './utils/create_doubly_linked_list';

class DoublyLinkedList {
  head: DoublyListNode | null;
  tail: DoublyListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  //Insert at the end
  append(val: number): void {
    const newNode = new DoublyListNode(val);
    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail;
      this.tail = newNode
    }
  }

  //Insert at the beginning
  prepend(val: number): void {
    const newNode = new DoublyListNode(val)
    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
  }

  //Delete a node with a given value
  delete(val: number): void {
    if (!this.head) return
    let cur: DoublyListNode | null = this.head
    while (cur) {
      if (cur.val === val) {
        if (cur === this.head) this.head = cur.next
        if (cur === this.tail) this.tail = cur.prev
        if (cur.prev) cur.prev.next = cur.next
        if (cur.next) cur.next.prev = cur.prev
      }
      cur = cur.next
    }
  }

  //Print the list from head to tail
  printForward(): void {
    let cur = this.head;
    let output = "Forward: ";
    while (cur) {
      output += cur.val + " <-> "
      cur = cur.next
    }
    console.log(output + "null")
  }

  printBackward(): void {
    let cur = this.tail;
    let output = "Backward: ";
    while (cur) {
      output += cur.val + " <-> "
      cur = cur.prev
    }
    console.log(output + "null")
  }
}