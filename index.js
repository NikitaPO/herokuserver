const PORT = 4321;
require('http')
  .Server(({url: u}, res) => {
    switch(u){
      case '/hello': {
        res.end('Hello world!');
        break;
      }
      case: '/add?': {
        let n1, n2;
        ({n1, n2} = require('querystring').parse(u.substring(5)));
        res.end('n1 + n2 = ', n1 + n2);
        break;
      }
      default: res.end('Hi! I am working');
    }
  })
  .listen(process.env.PORT || PORT);
