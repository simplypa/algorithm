//将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
function createListNode(value) {
    return {
      val: value,
      next: null,
    };
  }
  
function mergeTwoLists(l1, l2) {
    let dummyHead = createListNode(-1);
    let current = dummyHead;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    if (l1 !== null) {
      current.next = l1;
    } else {
      current.next = l2;
    }
  
    return dummyHead.next;
  }
  