const fs = require("fs");
const cp = require("child_process");
const argv = require("minimist")(process.argv.slice(2));
const createPosts = require("./create-posts-fn");

const filesCreated = createPosts(argv._);

// open files after created
// filesCreated.forEach((file) => {
//   cp.exec(`nvim ${file}`);
// });
