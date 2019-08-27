const fs = require('fs');  

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrrrrroooooorrrr');
  } 
  console.log(data.toString());
})