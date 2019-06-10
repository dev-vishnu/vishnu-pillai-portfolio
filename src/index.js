/* eslint-disable no-console */
import express, { static as _static } from 'express';
import HomeRoutes from './routes/home';

const app = express();

app.set('view engine', 'ejs');
app.use(_static('public'));

app.use('/', HomeRoutes);


app.listen(3000, () => {
  console.log('listening on port no 3000');
});
