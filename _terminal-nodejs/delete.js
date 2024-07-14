#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const readline = require('readline');

console.log(process.argv);

const input = process.argv[2];

fs.unlink(input, (err) => {
    if (err) throw err;
    console.log('File ' + chalk.cyanBright(input) + ' deleted.');
})

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const confirm = prompt("Are you sure to delete " + input + '?');
// const confirmed = 'yes' || 'YES' || 'Y' || 'y';
// const cancelled = 'no' || 'NO' || 'N' || 'n';

// fs.unlink(input, (err) => {
//     if(err) {
//         console.log(err);
//     }

//     rl.question('Text?', function(answer) {
//         if (answer === 'y' || 'Y') {
//             console.log('File ' + chalk.cyanBright(input) + ' deleted.');
//             process.exit();
//         } else {
//             process.exit();
//         }
//     })
      
// })

// const filepath = process.argv[2];

// rl.question(filepath => {

//     const confirmed = 'yes' || 'YES' || 'Y' || 'y';

//     if (answer === confirmed) {
//         fs.unlink(filepath, (err) => {
//             if (err) throw err;
//                 console.log('File ' + chalk.cyanBright(filepath) + ' deleted.');
//                 rl.close();
//                 process.exit();
//         })
//         process.exit();
//     }
// })