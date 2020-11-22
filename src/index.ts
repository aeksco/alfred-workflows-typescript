import * as notifier from "node-notifier";

// String
notifier.notify("Message");

// Object
notifier.notify({
  title: "My notification",
  message: "Hello, there!",
});

process.exit(0);
