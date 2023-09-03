/* 
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";

inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
    },
])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      "Prompt couldn't be rendered in the current environment"
    } else {
      "Something else went wrong"
    }
  });




  var qr = require('qr-img');
 
var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });



import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('Hello khara'));
writeFile('msg.txt', data, (err) => {
  if (err) throw err;
  console.log(svg_string);
});