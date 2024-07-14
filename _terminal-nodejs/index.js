#!/usr/bin/env node

// chmod +x index.js

// npm link

const fs = require('fs');

// V1

// fs.readdir('.', (err, filenames) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(filenames);

// })

// V2

// fs.readdir(process.cwd(), (err, filenames) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(filenames);

// })

// V3 BAD

// fs.readdir(process.cwd(), (err, filenames) => {
//     if (err) {
//         console.log(err);
//     }

//     for (let filename of filenames) {
//         fs.lstat(filename, (err, stats) => {
//             if (err) {
//                 console.log(err);
//             }

//             console.log(filename, stats.isFile());

//         });
//     }

// });


// V4

// fs.readdir(process.cwd(), (err, filenames) => {
//     if (err) {
//         console.log(err);
//     }

// const allStats = Array(filenames.length).fill(null);

//     for (let filename of filenames) {

//         const index = filenames.indexOf(filename);

//         fs.lstat(filename, (err, stats) => {
//             if (err) {
//                 console.log(err);
//             }

//             allStats[index] = stats;

//             const ready = allStats.every((stats) => {
//                 return stats;
//             });

//             if (ready) {
//                 allStats.forEach((stats, index) => {
//                     console.log(filenames[index], stats.isFile());
//                 });
//             }

//         });
//     }

// });

// fs.readdir(process.cwd(), async (err, filenames) => {
//     if (err) {
//         console.log(err);
//     }

// });

// method 1 promise

// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if(err) {
//                 reject(err);
//             }

//             resolve(stats);

//         });
//     });
// }

// method 2
// needed by method 3

// const util = require('util');
// const lstat = util.promisify(fs.lstat);

// method 3

// const { lstat } = fs.promises;
// thorows error undefined lstat

// fs.readdir(process.cwd(), async (err, filenames) => {
//     if (err) {
//         console.log(err);
//     }

//     for (let filename of filenames) {
        
//         try {
 
//             const stats = await lstat(filename);
            
//             console.log(filename, stats.isFile());

//         } catch (err) {
//             console.log(err);
//         }

//     }

// });


// method v4 - true or false
// const lstat = fs.promises.lstat

// const util = require('util');
// const lstat = util.promisify(fs.lstat);

// fs.readdir(process.cwd() , async (err, filenames) => {
//     if(err) {
//         console.log(err);
//     }

//     const statPromises = filenames.map(filename => {
//         return lstat(filename);
//     });

//     const allStats = await Promise.all(statPromises);

//     for (let stats of allStats) {
//         const index = allStats.indexOf(stats);

//         console.log(filenames[index], stats.isFile());
//     }

// });

// method v5 color coded

// const util = require('util');
// const lstat = util.promisify(fs.lstat);
// const chalk = require('chalk');

// console.log(process.argv);

// fs.readdir(process.cwd() , async (err, filenames) => {
//     if(err) {
//         console.log(err);
//     }

//     const statPromises = filenames.map(filename => {
//         return lstat(filename);
//     });

//     const allStats = await Promise.all(statPromises);

//     for (let stats of allStats) {
//         const index = allStats.indexOf(stats);

//         if (stats.isFile()) {
//             console.log(chalk.yellow(filenames[index]));
//         } else {
//             console.log(chalk.bold(filenames[index]));
//         }

//     }

// });

// method 6

const util = require('util');
const lstat = util.promisify(fs.lstat);
const chalk = require('chalk');
const path = require('path');

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
    if(err) {
        console.log(err);
    }

    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
        const index = allStats.indexOf(stats);

        if (stats.isFile()) {
            console.log(chalk.yellow(filenames[index]));
        } else {
            console.log(chalk.bold(filenames[index]));
        }

    }

});