const PORT = 8000;
const io = require('socket.io')(PORT);
let activeUsers = [];
let activeGroups = [];
io.on('connection', (socket) => {
    socket.on('new-user-joined', (user) => {
        console.log('new user joined: ', user.name);
        activeUsers.push(user);
        socket.broadcast.emit('user-joined', user.name);
    });
    socket.on('message-send', (message) => {
       console.log('sent mesage', message);
    });
    socket.on('user-left', (user) => {
        console.log('user left', user.name);
    });
    socket.on('disconnect', (user) => {
        console.log('user disconnect');
    })
});

