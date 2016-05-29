console.log(__("welcome to our test"));
for(var i = 1; i < 10; i++) {
	console.log(__n("we have completed %1 test", "we have completed %1 tests", i));
}
console.log(__("test completed"));
