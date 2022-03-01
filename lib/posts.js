// lib is where you fetch data from sources, here we're fetching at build
//   time from the filesystem but we could just as easily hit some endpoint
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'posts');

async function getFiles(currentPath = postsDirectory) {
  // map with shape {[post-id]: [path-to-post]}
  let idPathMap = new Map();
  // cache the result so this is only called once
  if (idPathMap.size > 0) {
    return;
  }
  const entries = await fs.readdirSync(currentPath, { withFileTypes: true });

  // Get files within the current directory and add a currentPath key to the file objects
  entries
    .filter((file) => !file.isDirectory())
    .forEach((file) =>
      idPathMap.set(
        file.name.replace('.md', ''),
        `${currentPath}/${file.name}`,
      ),
    );

  // Get folders within the current directory
  const folders = entries.filter((folder) => folder.isDirectory());

  /*
    Add the found files within the subdirectory to the files array by calling the
    current function itself
  */
  for (let folder of folders) {
    const folderContentsMap = await getFiles(`${currentPath}/${folder.name}`);
    idPathMap = new Map([...idPathMap, ...folderContentsMap]);
  }
  return idPathMap;
}

export async function getSortedPostsData() {
  // sets idPathMap
  const idPathMap = await getFiles();

  let allPostsData = [];
  idPathMap.forEach((path, id) => {
    // Read markdown file as string
    const fileContents = fs.readFileSync(path, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    allPostsData.push({
      id,
      ...matterResult.data,
    });
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    const compareDateA = a.updatedDate ?? a.date;
    const compareDateB = b.updatedDate ?? b.date;
    return compareDateA < compareDateB ? 1 : -1;
  });
}

export async function getAllPostIds() {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  const idPathMap = await getFiles();
  return Array.from(idPathMap.keys()).map((id) => {
    return {
      params: {
        id,
      },
    };
  });
}

// get frontmatter data related to one post given it's id
export async function getPostData(id) {
  const idPathMap = await getFiles();
  const fullPath = idPathMap.get(id);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // use gray-matter to parse the post metdata section
  const matterResult = matter(fileContents);

  // use remark to convert markdown to HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(fileContents);
  const contentHtml = processedContent.toString();

  // combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
