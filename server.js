const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.set('port', process.env.PORT || 3001);

const corsOptions = {
  origin: 'https://dg-test-front-end.herokuapp.com',
  optionsSuccessStatus: 200
}

const snacks = [
  { snackName: 'tacos', delicious: 'yup', cheap: 'Probably' }, 
  { snackName: 'okonomiyaki', delicious: 'yes\'m', cheap: 'Depends on fanciness' }, 
  { snackName: 'sad porridge', delicious: 'probably not', cheap: 'Hell yes' }
]

app.get('/api/v1/snacks', cors(corsOptions), (request, response) => {
  return response.status(200).json({snacks})
});

app.listen(app.get('port'), () => {
  console.log(`Running on http://localhost:${app.get('port')}.`)
});