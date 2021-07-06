# ffd — find a file among directories

## Usage

```javascript
const ffd = require("ffd");

// filename, [ path, ... ], callback(file)
ffd("passwd", ["/usr/local","/etc","/tmp"], function(file){
	if (file === null) {
		console.error("This file does not exist in any of the paths");
	} else {
		console.log("The file was found in %s", file);
	}
})
```
