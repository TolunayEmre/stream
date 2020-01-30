// We can print the data without any loss! We use the 'createWriteStream' parameter to print the publication we read.

const fs = require('fs');
const file = './stream-unit/video.mp4';

const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('./new-stream-unit/new.mp4'); // Use 'createWriteStream' to print the read data and name the new file('new.mp4').

let progress = 0;

fs.stat(file, (err, data) => {
  if (err) {
    console.log('There is a problem!');
  }
  const total = data.size; // To print the data, specify the size of the data.
  readStream.on('data', (chunk) => {
    progress += chunk.length; // Print each read value 'progress'.
    console.log(Math.round((100 * progress) / total) + '%');
  });
  readStream.pipe(writeStream); // Read each data separately with pipe!
  writeStream.on('finish', () => {
    console.log('New file created! File: "/new-stream-unit/new.mp4"');
  })
});
