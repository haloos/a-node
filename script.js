const fs = require('fs');  

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrrrrroooooorrrr');
  } 
  console.log('Async',data.toString('utf8'));
})  


const file = fs.readFileSync('./hello.txt'); 
console.log('Sync', file.toString());  

// Append 
// fs.appendFile('./hello.txt', 'This is sooooooo cool', err => {
  // if (err) {
   // console.log(err)
  // }
// })  

// Write
fs.writeFile('bye.txt', 'Sad to see you go!', err => {
 if(err) {
   console.log(err)
 }
})
  