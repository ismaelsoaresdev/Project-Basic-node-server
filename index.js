const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

const server = http.createServer(async (req, res) => {
  console.log('URL requisitada:', req.url);
  let filePath;

  switch (req.url) {
    case '/':
    case '/index':
      filePath = path.join(__dirname, 'index.html');
      break;
    case '/about':
      filePath = path.join(__dirname, 'about.html');
      break;
    case '/contact-me':
      filePath = path.join(__dirname, 'contact-me.html');
      break;
    default:
      filePath = path.join(__dirname, '404.html');
      break;
  }

  try {
    const data = await fs.readFile(filePath, 'utf8');
    const statusCode = req.url === '/404' || (req.url !== '/' && req.url !== '/index' && req.url !== '/about' && req.url !== '/contact-me') ? 404 : 200;
    
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(data);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Erro interno no servidor');
  }
});

server.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});