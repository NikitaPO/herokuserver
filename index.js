const PORT = 4321;
require('http')
.Server(({url: u}, res) => {
res.end('Hello, world!');
})
.listen(process.env.PORT || PORT);
