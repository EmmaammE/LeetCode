/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
         if (head == nullptr || head->next == nullptr) return head;

         ListNode dummy(-1);
         dummy.next = head;

         ListNode* prev = &dummy;
         ListNode* cur = prev->next;
         ListNode* next = cur->next;

//         prev -> cur -> next -> next.next
//		   prev -> next -> cur -> next.next

         while(next){
         	prev->next = next;
         	cur->next = next->next;
         	next->next = cur;

         	prev = cur;
         	cur = cur->next;
         	next = cur?cur->next:nullptr;
         }

         return dummy.next;
    }
};

