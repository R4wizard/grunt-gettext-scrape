#include <iostream>
using namespace std;

cout << __("welcome to our test") << endl;
for (size_t i = 1; i <10; ++i) {
    cout << __n("we have completed %1 test", "we have completed %1 tests", i) << endl;
}
cout << __("test completed") << endl;
