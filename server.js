var path = require('path');
var express = require('express');
var logger = require('morgan');

const app = express();
const port = 3000;

app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('*', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname,
  });
});
app.listen(port, () => {
  console.log(`listening on port: ${port}`); // eslint-disable-line no-console
});

