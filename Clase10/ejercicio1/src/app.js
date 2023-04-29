import express from 'express';
import {Server} from 'socket.io';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';

const app = express();


app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter)
const server = app.listen(8081, () => console.log('Server running'));

const io = new Server(server);
/* io.on('connection', socket=>{
    console.log('nuevo cliente conectado');
    socket.on('message', data =>{
        console.log(data);
    });
    socket.emit('evento_socket_individual', 'Este mensaje solo debe recibir el socket');
    socket.broadcast.emit('evento_todos_menos_actual', 'Este mensaje lo veran todos los clientes menos el actual');
    io.emit('evento_todos', 'Lo recibiran todos los clientes');
}); */
//Segunda parte: ejercicio
const logs= [];
io.on('connection', socket=>{
    console.log('Conectado');
    socket.on('message1', data=> {
        io.emit('log', data);
    });
    socket.on('message2', data=>{
        logs.push({socketId:socket.id, message: data});
        io.emit('log', {logs});
    });
});
