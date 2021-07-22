const { readFile, writeFile } = require("fs");
console.log("Starting...");
readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }
  const first = data;
  readFile("./content/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }
    const second = data;
    writeFile(
      "./content/result-async.txt",
      `The results are: ${first} & ${second}\n`,
      { flag: "a" },
      (err, data) => {
        if (err) {
          console.log(`Error: ${err}`);
          return;
        }
        console.log("Done with the task");
      }
    );
  });
});
console.log("Starting new task...");
