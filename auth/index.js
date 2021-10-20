const express = require('express');
const config = require('config');
const cors = require('cors');

const app = express();

const {companiesRouter} = require('./routes/companies');

app.use(express.json({limit: '10mb'}));
app.use(cors());

app.use('/companies', companiesRouter);

app.get('/', async (req, res) => {
  res.send('OK');
});

app.post('/login', async (req, res) => {
  try {
    const {mobile, code} = req.body;
    console.log('POST event', {mobile, code});

    res.json({
      status: 'OK', 
      authKey: '345345798347534795798',
      name: 'Auth User',
      avatarUrl: 'https://cdn.quasar.dev/img/avatar2.jpg',
    });
    /*
    const user = await User.findOne({mobile, code});
    if (!user) {
      return res.json({status: 'FAIL'});
    }
    */
  } catch (e) {
    console.log('err', e);
  }
  //res.json({status: 'OK'});
});

app.listen(config.port, () => {
  console.log('start with config', config);
});
