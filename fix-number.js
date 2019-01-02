const fs = require('fs');
const filePath = './README.md';
const content = fs.readFileSync(filePath).toString();
let index = 0;
const replacedContent = content.replace(/\|\d+/g, m => {
  index++;
  return '|' + index;
});

fs.writeFileSync(filePath, replacedContent);

console.log('done processing');
