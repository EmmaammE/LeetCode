#include <vector>;
using namespace std;
class Solution
{
  public:
    int removeElement(vector<int> &nums, int val)
    {
        int index = 0;
        int duplicate = -1;
        for (int i = 0; i < nums.size(); ++i)
        {
            if (nums[i] != val)
            {
                //                if (duplicate != -1) {
                //                    nums[duplicate] = nums[i];
                //                    duplicate = -1;
                //                    index++;
                //                } else {
                //                    nums[index++]  = nums[i];
                //                }
                nums[index++] = nums[i];
            }
            else
            {
                continue;
                //                if (duplicate!=-1) {
                //                    continue;
                //                } else {
                //                    duplicate = i;
                //                }
            }
        }

        return index;
    }
};