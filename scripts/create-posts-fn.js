const fs = require('fs');
const sanitize = require('sanitize-filename');

// give one or more titles and this will scaffold out files with title and date
//  example: node create-post.js "my new blog post"
//   creates 2021-04-29-my-new-blog-post.md with initial content

const capitalize = str =>
  str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();

function toTitleCase(str) {
  // always capitalize the first word
  str = capitalize(str);
  // capitalizes words longer than 4 letters
  return str.replace(/\w+\S*/g, txt =>
    txt.length > 3 ? capitalize(txt) : txt
  );
}

function createPosts(titles) {
  const today = new Date();
  const year = today.getFullYear();
  const date = `${`${today.getMonth() + 1}`.padStart(
    2,
    0
  )}-${`${today.getDate()}`.padStart(2, 0)}`;

  const filesCreated = [];
  titles.forEach(title => {
    const titleCaseTitle = toTitleCase(title);
    const filename = sanitize(
      `${date}-${title.split(' ').join('-').toLowerCase()}`
    );

    const filePath = `./posts/${year}/${filename}.md`;

    fs.appendFileSync(
      filePath,
      `---
title: '${titleCaseTitle}'
date: '${year}-${date}'
---

`
    );
    filesCreated.push(filePath);
  });
  return filesCreated;
}

module.exports = createPosts;
