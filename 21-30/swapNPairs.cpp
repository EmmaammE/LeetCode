/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution
{
  public:
    ListNode *reverseKGroup(ListNode *head, int k)
    {
        if (head == nullptr || head->next == nullptr)
            return head;
        if (!hasKNodes(head, k))
        {
            return head;
        }
        ListNode dummy(0);
        dummy.next = head;
        ListNode *pre = &dummy;
        ListNode *cur = pre->next;

        while (hasKNodes(cur, k))
        {
            for (int i = 0; i < k - 1; ++i)
            {
                ListNode *temp = pre->next;
                pre->next = cur->next;
                cur->next = cur ->next->next;
                pre->next->next = temp;
            }
            pre = cur;
            cur = pre->next;
        }

        return dummy.next;
    }

    bool hasKNodes(ListNode *node, int k)
    {
        int sum = 0;
        while (node)
        {
            ++sum;
            if (sum >= k)
            {
                return true;
            }
            node = node->next;
        }
        return false;
    }
};

int main(){
    ListNode *node1 = new ListNode(1);
    ListNode *node2 = new ListNode(2);
    node1->next = node2;
    ListNode *node3 = new ListNode(3);
    node2->next = node3;
    ListNode *node4 = new ListNode(4);
    node3->next = node4;
    ListNode *node5 = new ListNode(5);
    node4->next = node5;

   Solution s;
   s.reverseKGroup(node1,3);
}
