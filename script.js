const fs = require('fs');  

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrrrrroooooorrrr');
  } 
  console.log(data.toString('utf8'));
})  


const file = fs.readFileSync('./hello.txt'); 
console.log(file);