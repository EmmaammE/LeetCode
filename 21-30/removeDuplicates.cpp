#include <vector>;
#include <iostream>;
using namespace std;

class Solution
{
  public:
    int removeDuplicates(vector<int> &nums)
    {
        if (nums.empty())
        {
            return 0;
        }
        int length = 1;
        for (int i = 1; i < nums.size(); ++i)
        {
            if (nums[i - 1] != nums[i])
            {
                nums[length++] = nums[i];
            }
        }

        return length;
    }
};

int main()
{
    Solution s;
    vector<int> num = {1, 2, 2};
    s.removeDuplicates(num);
    return 0;
}