const fs = require('fs');
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

console.log(__dirname);
console.log(json);