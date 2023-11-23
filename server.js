import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
import {connectDB} from './db/monggose.js';
import {Todo} from './models/Todo.js';

const app = express();

// 1. Creating server using http
const server = http.createServer(app);

// 2. Create socket server
const io = new Server(server, {
    cors:{
        origin:'*',
        methods:['GET', 'POST']
    }
})



// 3. Use socket event

io.on('connection', (socket)=> {
    console.log('connection is  stablish');
    socket.on('addTodo', (todo)=> {
        socket.broadcast.emit('broadcast_todo', todo);
    })
    socket.on('disconnect', ()=> {
        console.log('connection is disconnect');
    })
})






server.listen(3000, ()=> {
  console.log('App is litsening on port:3000');
  connectDB();
})




