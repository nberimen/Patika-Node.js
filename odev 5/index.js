const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>INDEX SAYFASI</h1>');
    }
    else if (url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('HAKKIMDA SAYFASI');
    }
    else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('ILETISIM SAYFASI');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 SAYFA BULUNAMADI</h1>');
    }
    res.end();
});


server.listen(port, () => {
  console.log(`Sunucu port ${port}de başlatıldı.`);
});
