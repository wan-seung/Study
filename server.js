// const http = require('http'); // 서버를 만드는 모듈 불러옴
// http
//   .createServer((request, response) => {
//     // 서버 만드는 메소드
//     console.log('server start!');
//   })
//   .listen(8080);

const http = require('http');
http
  .createServer((request, response) => {
    return request
      .on('error', err => {
        console.error(err);
      })
      .on('data', data => {
        console.log(data);
      })
      .on('end', () => {
        response.on('error', err => {
          console.log(err);
        });
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write('hi\n');
        response.end('the end!');
      });
  })
  .listen(8080);
