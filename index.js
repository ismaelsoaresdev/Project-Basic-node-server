const express = require('express');
const app = express();
const PORT = 3000;

const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server runnig on port:${PORT}`);
});

  app.get('/', (req, res) => {
  res.sendFile('/', { root: __dirname });
});

     app.get('/about', (req, res) => {
   res.sendFile('about.html', { root: __dirname });
});

    app.get('/contact-me', (req, res) => {
  res.sendFile('contact-me.html', { root: __dirname });
});

 app.use((req, res) => {
  res.sendFile(join(__dirname, 'contact-me.html')) });


  