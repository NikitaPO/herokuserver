const PORT = 4321;
require('http')
  .Server(({url: u}, res) => {
    switch(u){
      case '/hello': {
        res.end('Hello world!');
        break;
      }
      default: res.end('Hi');
    }
  })
  .listen(process.env.PORT || PORT);
