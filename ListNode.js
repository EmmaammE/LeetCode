/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let l1 = new ListNode(1);
l1.next = new ListNode(8);
l1.next.next = new ListNode(5);
let l2 = new ListNode(2);
var addTwoNumbers = function (l1, l2) {
   let result_ = new ListNode(0);
   let result = result_;
   let carry = 0;
   while (l1 || l2) {
      let temp = 0;
      if (l1) {
        temp+=l1.val; l1 = l1.next;
      }
      if (l2) {
        temp+=l2.val;l2 = l2.next;
      }
     result.next = new ListNode((temp + carry) % 10);
     carry = parseInt((temp+ carry) / 10);
     result = result.next;
     if (carry!==0) {
       result.next = new ListNode(carry);
     }

   }
  //  if (l1) {
  //    result_.next = new ListNode(0);
  //    result_.next = l1;
  //  }
  //  if (l2) {
  //    result_.next = new ListNode(0);
  //    result_.next = l2;
  //  }
   return result_.next;
};
console.log(addTwoNumbers(l1,l2));