const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

// give one or more titles and this will scaffold out files with title and date
//  example: node create-post.js "my new blog post"
//   creates 2021-04-29-my-new-blog-post.md with initial content

const titles = argv._;

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

const today = new Date();
const year = today.getFullYear();
const date = `${`${today.getMonth() + 1}`.padStart(
  2,
  0
)}-${`${today.getDate()}`.padStart(2, 0)}`;

titles.forEach(title => {
  const titleCaseTitle = toTitleCase(title);
  const filename = `${date}-${title.split(' ').join('-').toLowerCase()}`;

  fs.appendFile(
    `./posts/drafts/${filename}.md`,
    `---
title: '${titleCaseTitle}'
date: '${year}-${date}'
---

# ${titleCaseTitle}

`,
    err => {
      if (err) throw err;
      console.log(`${year}/${filename}`);
    }
  );
});
