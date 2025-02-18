import { createLinkedList, ListNode } from './utils/create_linked_list'

function isLoop (head: ListNode | null): boolean {
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow!.next
    if (fast == slow) return true
  }

  return false
}

let linearList = createLinkedList([1, 2, 3]);
let loopedList = createLinkedList([1, 2, 3], 2);

console.log(linearList)
console.log(loopedList)
console.log(isLoop(linearList))
console.log(isLoop(loopedList))
