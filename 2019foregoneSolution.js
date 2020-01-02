'use strict';

const main = () => {
  const readline = require('readline');
  let initiated = false;
  let j = 1;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line', line => {
    if (!initiated) {
        initiated = true;
    } else {
    let a = "";
    let b = "";
    
    for (let i = 0; i < line.length; i++) {
        if (line[i] === '4') {
            a += '2';
            b += '2';
        } else {
            a += line[i];
            b += '0';
        }
    }
    console.log(`Case #${j++}: ${a} ${parseInt(b)}`);
    }
  }).on('close', () => {
    process.exit(0);
  });
};

if (!module.parent) {
  main();
}
