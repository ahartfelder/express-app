import express from 'express';
import methodOverride from "method-override";
import clientRouter from "./routes/clients";
import homeRouter from "./routes/home";
import db from "./db";

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(homeRouter);
app.use('/clients', clientRouter);
app.set('view engine', 'pug');
app.set('views', './views');

db.sync().then(() => {
    console.log(`Database connection established on ${process.env.DB_NAME}`)
}).then(() => {
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
});
