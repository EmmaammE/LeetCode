/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;

}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var result = new ListNode(0);
  var head = result;
  var temp;
  while (l1 && l2 ) {
    if (l1.val < l2.val) {
      temp = new ListNode(l1.val);
      result.next = temp;
      l1 = l1.next;
      result = result.next;
    } else {
      temp = new ListNode(l2.val);
      result.next = temp;
      l2 = l2.next;
      result = result.next;
    }
  }

  while (l1) {
    temp = new ListNode(l1.val);
    result.next = temp;
    result = result.next;
    l1 = l1.next;
  }

  while (l2) {
    temp = new ListNode(l2.val);
    result.next = temp;
    result = result.next;
    l2 = l2.next;
  }

  return head.next;
};