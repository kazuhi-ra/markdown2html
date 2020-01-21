const program = require('commander');
const fs = require('fs');

program.parse(process.argv);
const filePath = program.args[0];

fs.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  } else {
    console.log(file);
  }
});

