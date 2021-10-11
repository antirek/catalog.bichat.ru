const express = require('express');
const config = require('config');
const cors = require('cors');

const {User} = require('./models');

const app = express();
app.use(express.json({limit: '10mb'}));
app.use(cors());

app.get('/', async (req, res) => {
  res.send('OK');
});

app.post('/login', async (req, res) => {
  try {
    const {mobile, code} = req.body;
    console.log('POST event', {mobile, code});

    const user = await User.findOne({mobile, code});
    if (!user) {
      return res.json({status: 'FAIL'});
    }
  } catch (e) {
    console.log('err', e);
  }
  res.json({status: 'OK'});
});

app.listen(config.port, () => {
  console.log('start with config', config);
});
