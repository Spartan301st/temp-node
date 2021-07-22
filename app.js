// npm --version

// local dependencies
// npm i <packageName>

// global dependencies
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// nmp init (step by step, press enter to skip)
// nmp init -y (everything def)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
