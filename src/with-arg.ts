import * as notifier from "node-notifier";

// String
notifier.notify("Message");

// Object
notifier.notify({
  title: "Message from Alfred",
  message: process.argv[2],
});

console.log("Scrupt with args");
console.log(process.argv);
process.exit(0);

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
