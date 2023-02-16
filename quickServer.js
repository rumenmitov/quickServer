let express = require('express'),
  path = require('path'),
  colors = require('colors');

const filePath = path.dirname(process.argv[2]);
const fileIndex = path.basename(process.argv[2]);
express()
  .use(express.static(filePath, { index: fileIndex }))
  .listen(3000);

console.log('\n---------------------------'.white);
console.log('Server running on port 3000'.green);
console.log('Website: http://127.0.0.1:3000'.yellow);
console.log('---------------------------\n'.white);
