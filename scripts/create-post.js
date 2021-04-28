const fs = require("fs");
const argv = require("minimist")(process.argv.slice(2));

const titles = argv._;

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

const today = new Date();
const date = `${today.getFullYear()}-${`${today.getMonth() + 1}`.padStart(
  2,
  0
)}-${`${today.getDate() + 1}`.padStart(2, 0)}`;

titles.forEach((title) => {
  const titleCaseTitle = toTitleCase(title);
  const filename = `${date}-${title.split(" ").join("-").toLowerCase()}`;

  fs.appendFile(
    `./posts/${filename}.md`,
    `---
title: '${titleCaseTitle}'
date: '${date}'
---

# ${titleCaseTitle}

`,
    (err) => {
      if (err) throw err;
      console.log(`${filename}`);
    }
  );
});
