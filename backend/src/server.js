const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // intentionally simple logging for container environments
  console.log(`Tiny API listening on ${PORT}`);
});
