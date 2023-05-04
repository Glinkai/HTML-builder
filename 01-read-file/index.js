const fs = require('fs');
const path = require('path').join(__dirname, 'text.txt');
const stream = fs.createReadStream(path, 'utf-8');

let fileContent = '';
stream.on('data', data => fileContent += data);
stream.on('end', () => console.log(fileContent));
stream.on('error', error => console.error(error.message));