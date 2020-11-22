console.log("Scrupt with args");
console.log(process.argv);

// node ./dist/with-arg.js mannnn what huh todo
// Yields:
// [
//   "/usr/local/bin/node",
//   "/Users/aeksco/code/alfred-workflows/dist/with-arg.js",
//   "mannnn",
//   "what",
//   "huh",
//   "todo",
// ];

process.exit(0);
