/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var removeNthFromEnd = function (head, n) {
  var left = head;
  var right = head;
  var result = [];
  if (head.next === null) {
    return []
  }
  for (let index = 0; index < n - 1; index++) {
    right = right.next;
  }
  // 去掉最后一个时
  if (right.next === null) {
    return head.next;
  }
  while (right.next !== null) {
    result.push(left);
    left = left.next;
    right = right.next;
  }
  // console.log(result);
  if (n === 1) {
    // 这样就会快一些，也可以不加
    result[result.length - 1].next = null;
  } else {
    result[result.length - 1].next = result[result.length - 1].next.next;
  }
  return result[0];
};

var input = new ListNode(1);
var inputN = new ListNode(2);
input.next = inputN;
var inputNN = new ListNode(3);
inputN.next = inputNN;
// inputNN.next = new ListNode(4);
// console.log(input);
console.log(removeNthFromEnd(input, 2));