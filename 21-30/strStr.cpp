#include <iostream>
using namespace std;
class Solution
{
public:
    int strStr(string haystack, string needle)
    {
        if ( needle=="" ) {
            return 0;
        }
        int flag = 0;
        for (int i = 0; i < haystack.length(); ++i) {
            for ( int j = 0;j < needle.length(); ++ j) {
                if ( haystack[i+j] != needle[j]) {
                    break;
                }
                if ( j == needle.length()-1 ) {
                    flag = 1;
                }
            }

            if (flag==1) {
                return i;
            }
        }

        return -1;
    }
};

int main() {
    Solution s;
    int k = s.strStr("hello","ll");
    cout << k;
}