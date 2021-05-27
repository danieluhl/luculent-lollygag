const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const grayMatter = require('gray-matter');
const createPosts = require('./create-posts-fn');

const draftId = Number(argv._);

if (!draftId) {
  throw new Error(`Please enter a valid draft Id: ${draftId}`);
}

// get content from draft file
const draftPath = `drafts/draft-${draftId}.md`;
const draftContent = fs.readFileSync(draftPath);

if (!draftContent) {
  throw new Error(`No content found in: ${draftPath}`);
}

// get post title from frontmatter of draft - if "placeholder" throw error
const contentString = String(draftContent);
const matter = grayMatter(contentString);
const title = matter.data.title;

if (!title || title === 'placeholder') {
  throw new Error(
    `Please update post title in frontmatter before publishing, received title: ${title}`
  );
}

// runs create post with the title
const [postPath] = createPosts([title]);
// append draft content to the new file
fs.appendFileSync(postPath, matter.content);
// delete the draft file
fs.unlinkSync(draftPath);
