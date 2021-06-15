#include <iostream>

using namespace std;
#include <vector>

class Solution {
public:
  #define ll long long
  ll dp[102][102];
  int minCost(int n, vector<int>& cuts) {
    sort(cuts.begin(), cuts.end());
    cuts.insert(cuts.begin(), 0);
    cuts.push_back(n);
    for (int i = cuts.size()-1; ~i; --i) {
      for (int j = i + 1; j<cuts.size(); ++j) {
        if (i+1<j) {
          dp[i][j] = LLONG_MAX;
          for (int k = i + 1; k < j; ++k) {
            dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j]);
          }
          dp[i][j] += cuts[j] - cuts[i];
        }
        cout << i << " " << j << " " << dp[i][j] << " \n";
      }
    }
    return dp[0][cuts.size()-1];
  }
};

int main()
{
  Solution sol;
  int n = 9;
  vector<int> cuts;
  cuts.push_back(5);
  cuts.push_back(6);
  cuts.push_back(1);
  cuts.push_back(4);
  cuts.push_back(2);
  int ans = sol.minCost(n, cuts);
  cout << "answer is: " << ans << endl;
}