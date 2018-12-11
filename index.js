const PORT = 4321;
require('http')
  .Server(({url: u}, res) => {
    switch(u){
      case '/hello': {
        res.end('Hello world!');
        break;
      }
      default: {
        if(u.startsWith('/add?')){
          let n1, n2, sum;
          ({ n1, n2 } = require('querystring').parse(u.substring(5)));
          sum = n1 + n2;
          res.end('n1 + n2 = ' + sum);
        } else res.end('Hi! I am working');
      }
    }
  })
  .listen(process.env.PORT || PORT);
