import express from 'express';
import clientRouter from "./routes/clients";
import homeRouter from "./routes/home";

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.use(express.static('public'));
app.use(homeRouter);
app.use('/clients', clientRouter);
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));