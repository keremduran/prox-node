const app = require('express')();
const { v4 } = require('uuid');
var postmark = require("postmark");

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(`Item: ${slug}`);
});

app.post('/api/email', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(req));
});


module.exports = app;