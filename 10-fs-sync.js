const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
// console.log(typeof first, second);
writeFileSync(
  "./content/result-sync.txt",
  `Here are the results: ${first} & ${second}\n`,
  {
    flag: "a",
  }
);

console.log("Done with the task");
console.log("starting the next one");
