const PORT = 4321;
require('http')
  .Server(({url: u}, res) => {
    switch(u){
      case '/hello': {
        res.end('Hello world!');
        break;
      }
      
      default: res.end('Hi! I am working');
    }
  })
  .listen(process.env.PORT || PORT);
