import app from './application';
const port = process.env.PORT || 8000;

declare interface XMLHttpRequest {}
declare interface Blob {}

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});

