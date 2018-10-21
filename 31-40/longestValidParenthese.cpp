//
// Created by zhuzhu on 2018/10/20.
//
#include <vector>
#include <string>
#include <iostream>
using namespace std;

class Solution {
public:
    int longestValidParentheses(string s) {
//        init for one longer than the s
        vector<int> dp(s.size()+1,0);
        int longest = 0;

        for (int i = 0; i < s.length(); ++i) {
            if (s[i] == ')') {
                if (i>=1 && s[i-1]=='(') {
                    dp[i+1] = dp[i-1] + 2;
                } else if ( i-dp[i]-1 >= 0 && s[i-dp[i]-1] == '(') {
                    dp[i+1] = dp[i] + dp[i-dp[i]-1] + 2;
                    cout << i-dp[i]-2 << " " << dp[i-dp[i]-1] << endl;
                }
            }
            longest = longest > dp[i+1] ? longest : dp[i+1];
        }

        cout << endl;
        for (auto be = dp.begin();be!=dp.end();be++) {
            cout << (*be) << " ";
        }
        return longest;
    }
};

int main() {
    Solution s;
    s.longestValidParentheses("()(())");

}