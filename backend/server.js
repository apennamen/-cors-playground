const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  // Allow all get requests
  // res.setHeader('Access-Control-Allow-Origin', '*');

  // Allow get requests from localhost:8080 to set cookies from server
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  //res.setHeader('Access-Control-Allow-Credentials', 'true');
  //res.setHeader('Set-Cookie', 'cookieName=cookieValue; Domain=localhost; Path=/; Secure; HttpOnly; SameSite=None');

  // Allow get requests with Authorization header
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  // res.setHeader('Access-Control-Allow-Headers', 'Authorization');

  // Allow get requests from localhost:8080 with custom headers
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  //res.setHeader('Access-Control-Allow-Headers', 'Authorization, x-custom-header');

  // Allow PUT requests
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  //res.setHeader('Access-Control-Allow-Methods', 'PUT');
  
  // Allow JS to read the server response header
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  //res.setHeader('Access-Control-Exposer-Header', 'x-server-header');

  res.end(`${req.method} - Success!\n`);
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});