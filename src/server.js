import path from 'path';
import express from 'express';
import logger from 'morgan';

const app = express();
const port = 3000;

app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, '../static')));
app.use('*', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../'),
  });
});
app.listen(port, () => {
  console.log(`listening on port: ${port}`); // eslint-disable-line no-console
});

