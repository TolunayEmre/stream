// The process of reading the 'stream-unit/video.mp4' file.

const fs = require('fs');
const file = './stream-unit/video.mp4';

const readStream = fs.createReadStream(file); // Assign the selected file('file') to the value to read.

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
  readStream.on('end', () => {
    console.log('Data reading finished!');
  });
});
