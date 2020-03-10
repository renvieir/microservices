const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => res.json({message: "Hello from server"}));

app.listen(5000);