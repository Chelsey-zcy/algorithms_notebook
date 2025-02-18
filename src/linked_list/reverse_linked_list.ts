import { createLinkedList, ListNode } from './utils/create_linked_list'
// Three ways to reverse a linked list
//1. Sliding pointers with three pointers (r, q, p)


//2. Three pointers prev, cur and next

function ReverseLinkedList2 (head: ListNode | null): ListNode | null {
    let prev = null
    let cur = head
    let next
    while (cur) {
      next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }
    head = prev
    return head
}


//3. sRecursive
function RecursiveReverse (q: ListNode | null, head: ListNode | null): ListNode | null {
    if (head) {
      RecursiveReverse(head, head.next)
      head.next = q
    }
      head = q
    return head
}





const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)

node1.next = node2
node2.next = node3
node3.next = null

console.log("node1", node1)


console.log("ReverserLinkedList",RecursiveReverse(null, node1))