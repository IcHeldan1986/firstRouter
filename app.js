const express = require ('express');
const router = require ('./router');
const userRouter = require ('./my-modules/user-router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

const port = 3000;

app.use(router);
app.use(userRouter);

app.listen(3000, () => {
    console.log(`serveur connecté au port ${port}`);
});