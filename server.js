const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample endpoints
app.get('/', (req, res) => {
  res.send('Freight Pro Backend Running ✅');
});

app.post('/jobs', (req, res) => {
  res.json({ message: 'Job posted', job: req.body });
});

app.post('/bids', (req, res) => {
  res.json({ message: 'Bid placed', bid: req.body });
});

app.listen(10000, () => {
  console.log('Server running on port 10000');
});
