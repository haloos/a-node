const fs = require('fs');  

fs.readFile('', (err, data) => {
  if (err) {
    console.log('errrrrrroooooorrrr');
  } 
  console.log(data);
})