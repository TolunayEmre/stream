/*
If we run the publication with 'fs', the size of the file is instantaneously written into memory.
Let's say our file size is 100 mb. if we publish with 'read file', it is instantly written to 100mb memory.
This situation exhausts the memory too much.
This should not be done in very large publications!
To prevent this, we will use method 2:
The advantage of this code is that it does not print all the data suddenly. Prints each data it reads into memory.
In this way, it does not create a momentary pressure in the memory.
This makes the memory more stable!

Starting the 'SMPT.js' file(stream-memory-performance-test): node MemoryTest.js 
Open the terminal and enter this command: curl http://localhost:3000
And then examine the memory performance!
*/

const fs = require('fs');
const http = require('http');
const server = http.createServer();
const readStream = fs.createReadStream('../stream-unit/file.txt');

server.on('request', (req, res) => {
  // The 'pipe' we use here processes the data as it is read and makes the memory performance more stable than the 'fs' method.
  readStream.pipe(res);

  /*
  The 'fs' method used here imposes a momentary load on the memory!
  
  fs.readFile('../stream-unit/file.txt', (err, data) => {
    if (err) {
      throw err;
    } else {
      res.end(data);
    }
  })
  */

})

server.listen(3000);
