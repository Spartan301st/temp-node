const os = require("os");

// info about the current user
const user = os.userInfo();
// console.log(user);

// Uptime of the system
console.log(`The system uptime is ${os.uptime() / 60 / 60} hours.`);

const currentOs = {
  name: os.type(),
  relese: os.release(),
  totMemo: os.totalmem() / 1024 ** 2,
  freeMemo: os.freemem() / 1024 ** 2,
};

console.log(currentOs);
