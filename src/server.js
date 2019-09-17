import express, { static as staticfunction } from 'express';
import { resolve } from 'path';

const app = express();

app.use(staticfunction(resolve(__dirname, '../../build')));
app.use('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../../build/index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
