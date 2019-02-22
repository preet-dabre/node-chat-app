const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.send('Hey now brown cow');
// });

io.on('connection', (socket) => {
    console.log('New user conected');

    socket.emit('newMessage', {
        from: 'John',
        text: 'see you',
        createdAt: 1234
    });

    socket.on('createMessage', (message) => {
        console.log('Create Message', message);
    });




    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


server.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
});
