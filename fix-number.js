const fs = require('fs');
const filePath = './README.md';
const content = fs.readFileSync(filePath).toString();
let index = 0;
let replacedContent = content.replace(/\|\d+/g, m => {
  index++;
  return '|' + index;
});

index = 0;
replacedContent = replacedContent.replace(/\d+.\s+###\s/g, m => {
  index++;
  return `${index}. ### `;
});

fs.writeFileSync(filePath, replacedContent);

console.log('done processing');
