const fs = require("fs");
const path = require("path");

const ffd = module.exports = function(file, dirs, fn){

	if (!(dirs instanceof Array)) dirs = [ dirs ];
	dirs = dirs.filter(function(d){ return (typeof d === "string"); });
	if (dirs.length === 0) return fn(null);

	const dir = dirs.shift();
	const f = path.resolve(dir, file);
	fs.access(f, function(err){
		if (!err) return fn(f);
		ffd(file, dirs, fn);
	});
	
};
