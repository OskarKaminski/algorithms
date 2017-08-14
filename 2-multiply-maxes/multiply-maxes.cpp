#include <iostream>
#include <vector>

using std::vector;
using std::cin;
using std::cout;

long long MaxPairwiseProduct(const vector<long long>& numbers) {
		long long maxNumbers[2] = {0, 0};
		int n = numbers.size();
	  for (int i = 0; i < n; i++) {
		if(numbers[i] > maxNumbers[0] || numbers[i] > maxNumbers[1]){
			if(maxNumbers[0] > maxNumbers[1]){
				maxNumbers[1] = numbers[i];
			} else {
				maxNumbers[0] = numbers[i];
			}
		}
	  }
	  return maxNumbers[0] * maxNumbers[1];
}

int main() {
    int n;
    cin >> n;
    vector<long long> numbers(n);
    for (int i = 0; i < n; ++i) {
        cin >> numbers[i];
    }
    long long result = MaxPairwiseProduct(numbers);
     cout << result << "\n";
    return 0;
}