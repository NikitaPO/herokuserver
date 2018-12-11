const PORT = 4321;
require('http')
  .Server(({url: u}, res) => {
    res.end(url);
  })
  .listen(process.env.PORT || PORT);
