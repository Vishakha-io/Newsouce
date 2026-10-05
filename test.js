const add = require("./app");

const result = add(2, 3);

if (result === 5) {
  console.log("Test passed");
  process.exit(0);
} else {
  console.log("Test failed");
  process.exit(1);
}
