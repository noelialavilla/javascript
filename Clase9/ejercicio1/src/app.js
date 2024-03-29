import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(`${__dirname}/public`)); //exponemos los archivos estaticos

app.use('/', viewsRouter);
app.use('/api/users', usersRouter);
app.listen(8080, ()=> console.log('Listening on por 8080'));