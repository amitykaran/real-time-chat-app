const PORT = 8000;
const io = require('socket.io')(PORT);
let activeUsers = [];
let activeGroups = [];
io.on('connection', (socket) => {
    socket.on('message-send', (message) => {
       console.log('sent mesage', message);
    });
});

