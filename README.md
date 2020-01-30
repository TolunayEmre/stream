# Stream reading, writing and memory performance test!

**For the project to work, there must be 2 files named _'video.mp4'_ and _'file.txt'_. Keep these files in the _'stream-unit'_ folder.**

*File size:*
- video.mp4  => Min 30 MB size
- file.txt  => Min 300 MB size

## Getting started
```
$ git clone https://github.com/TolunayEmre/streams.git
$ cd stream/
```

## Stream reading process
```
$ npm run read-stream
or
$ node ReadStream.js
```

## Stream writing process
```
$ npm run write-stream
or
$ node WriteStream.js
```

## Stream memory performance test
*For Ubuntu: Installing 'curl' to requesting to the server*
```
$ sudo apt-get install curl
```

***Launch stream memory performance test***
```
$ cd stream-memory-performance-test/
$ node MemoryPerformanceTest.js
```
*and open new terminal*
```
$ curl http://localhost:3000
```
