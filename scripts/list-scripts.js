// list all the commands available via package.json scripts
// todo: make this a npx-able package

const fs = require('fs');

const packagejson = fs.readFileSync('package.json');
const scripts = JSON.parse(packagejson).scripts;
console.log(scripts);
