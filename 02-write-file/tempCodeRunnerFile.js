const fs = require('fs');
const path = require('path').join(__dirname, 'text.txt');
const { stdin, stdout } = process;
const stream = fs.createWriteStream(path);

stdout.write(
  'Hello!\nWrite something and necessarily press "enter", please.\nAfter press "ctrl + c" or write "exit" to abort process.\nThank you!\n',
);
stdin.on('data', (data) => {
  const dataString = data.toString();
  if (dataString.trim() === 'exit') {
    stdout.write('\nThe process is abort.\n');
    process.exit();
  }
  stream.write(dataString);
});
process.on('SIGINT', () => {
  stdout.write('\nData has been written to text.txt :)\nHave a nice day!\n');
  process.exit();
});