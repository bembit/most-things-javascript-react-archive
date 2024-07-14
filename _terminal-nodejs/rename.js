#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

// const util = require('util');
// const lstat = util.promisify(fs.lstat);

console.log(process.argv);

const firstInput = process.argv[2];
const secondInput = process.argv[3];

// add the inputs to one variable

const targetDir = process.argv[4] || process.cwd();
// get a 3rd input on the 4th index to set the path where I want to make the changes to file/folder names

fs.rename(firstInput, secondInput, (err) => {
    if (err) throw err;
        console.log('Rename complete! From ' + chalk.bgRed(firstInput) + chalk.white(' To ') + chalk.bgGreen(chalk.black(secondInput)));

        // const statPromises = filenames.map(filename => {
        //     return lstat(path.join(targetDir, filename));
        // });
    
        // const allStats = await Promise.all(statPromises);
  });