// this helps avoid potention cannot GET/ errors 

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => console.log(`Now listening on port ${port}!`));