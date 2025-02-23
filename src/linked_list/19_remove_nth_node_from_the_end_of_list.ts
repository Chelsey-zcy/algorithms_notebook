import { createLinkedList, ListNode } from './utils/create_linked_list'

function removeNode(head: ListNode | null, n: number): ListNode | null {
  let count = 0
  while (head) {
    count++
    head = head.next
  }
  if (n > count || n <= 0) return head

  let placeOfNode = count - n + 1
  let cur: ListNode | null = head
  let p: ListNode | null = null
  for (let i = 1; i++; i < placeOfNode) {
    p = cur
    cur = cur!.next
  }
  if (cur) {
    p!.next = cur.next
  }
  return head
}