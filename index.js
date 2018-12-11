const PORT = 1234;
require('http')
  .Server(({url: u}, res) => {
    switch(u){
      case '/hello': {
        res.end('Hello world!');
        break;
      }
      default: {
        if(u.startsWith('/add?')){
          let n1, n2;
          ({ n1, n2 } = require('querystring').parse(u.substring(5)));
          res.end('n1 + n2 = ' + (Number(n1) + Number(n2)));
        } else res.end('Hi! I am working');
      }
    }
  })
  .listen(process.env.PORT || PORT);
