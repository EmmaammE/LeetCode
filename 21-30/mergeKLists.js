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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists === null || lists.length === 0) {
    return null;
  }
  return sort(lists,0,lists.length-1);
};

function sort(lists = [],lo=0,hi=0) {
  if (lo >= hi) {
    return lists[lo]
  }
  var mid = parseInt((hi - lo) / 2 + lo);
  var l1 = sort(lists,lo,mid);
  var l2 = sort(lists,mid+1,hi);
  return merge(l1,l2);
}

function merge(l1, l2) {
  var result = new ListNode(0);
  var head = result;
  var temp;
  while (l1 && l2) {
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