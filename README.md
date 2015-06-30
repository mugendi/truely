# Truely

Tests for truthy values and returns a boolean value. Can take interger, string, or even object values.



##Installation

Using npm:

```bash
$ npm install --save truely
```

In NodeJs/io.js

    var truely= require('truely');

	//some truely tests
	
	truely('yes') 
		=> true

	truely('1') 
		=> true

	truely('0') 
		=> false

	truely('yes') 
		=> true
	
	truely(0) 
		=> false

	truely(false) 
		=> false

	truely({}) 
		=> false

	truely({has:'value'}) 
		=> true
