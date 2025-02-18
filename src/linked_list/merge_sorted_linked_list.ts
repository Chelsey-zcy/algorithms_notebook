import { createLinkedList, ListNode } from './utils/create_linked_list'

function mergeLinkedLists (list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let dummy = new ListNode()
  let current = dummy
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }

  current.next = list1 !== null ? list1 : list2

  return dummy.next
}


const list1 = createLinkedList([2,4,6,8,12])
const list2 = createLinkedList([1,3,5,7,13,15])

console.log('list1', list1)
console.log('list2', list2)
console.log('merge',mergeLinkedLists(list1, list2))
