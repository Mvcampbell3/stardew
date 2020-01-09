const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path')

const npcs = require('./seed');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/dist/client")))


app.use(routes)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stardew',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log('mongoose connected');
    app.listen(PORT, () => {
      console.log(`server is live on http://localhost:${PORT}`)
    })
  }
)

