const PORT = 4321;
require('http')
  .Server(({url: u}, res) => {
    res.end('u');
  })
  .listen(process.env.PORT || PORT);
