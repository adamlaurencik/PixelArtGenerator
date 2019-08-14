const express = require('express')
const app = express();
const APP_SERVER_PORT= process.env.APP_SERVER_PORT;
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(process.env.APP_SERVER_PORT, () => {
  console.log(`Example app listening on port ${process.env.APP_SERVER_PORT}!`);
});