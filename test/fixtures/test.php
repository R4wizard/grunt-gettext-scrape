<?php
echo __("welcome to our test");
for($i = 1; $i < 10; $i++) {
	echo __n("we have completed %1 test", "we have completed %1 tests", $i);
}
echo __("test completed");
