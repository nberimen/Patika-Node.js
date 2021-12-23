const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
  const url = ctx.url;
  if (url === "/") {
    ctx.body = "<h1>INDEX SAYFASI</h1>";
  } else if (url === "/hakkimda") {
    ctx.body = "<h1>HAKKIMDA SAYFASI</h1>";
  } else if (url === "/iletisim") {
    ctx.body = "<h1>ILETISIM SAYFASI</h1>";
  } else {
    ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>";
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port}da çalışmaya başladı.`);
});
