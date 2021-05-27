const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const createPosts = require('./create-posts-fn');

createPosts(argv._);
