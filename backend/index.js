const express = require('express');

const app = express();

app.get('/',(req, res) => {
  return res.json({message:'Qualéééééééééééééé!!!!!!!'});
});

app.listen(3333);