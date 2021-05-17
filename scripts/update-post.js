const fs = require("fs");
const grayMatter = require("gray-matter");
const glob = require("fast-glob");
const argv = require("minimist")(process.argv.slice(2));

async function getPath(title) {
  const findTitle = title.toLowerCase().replaceAll(" ", "-");
  const files = await glob(`./posts/**/*+(${findTitle})*.md`);
  if (files.length > 1) {
    throw new Error(
      "More than one post match, please be more specific: ",
      files
    );
    return;
  }
  return files[0];
}

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, 0);
  const day = today.getDate().toString().padStart(2, 0);
  return `${year}-${month}-${day}`;
}

function updateFileDate(path, updated) {
  const fileContents = fs.readFileSync(path);
  const fileMatter = grayMatter(String(fileContents));
  const data = grayMatter.stringify(fileMatter.content, {
    ...fileMatter.data,
    updated,
  });
  fs.writeFile(path, data, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
}

async function main(title) {
  const path = await getPath(title);
  const updated = getDate();
  updateFileDate(path, updated);
}

main(argv._[0]);
