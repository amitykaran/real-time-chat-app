const socket = io('http://localhost:8000');

const name = prompt('Enter Your name');
socket.on('connect', () => {
    console.log('connection established');
    socket.emit('new-user-joined', {name: name});
});
socket.on('disconnect', () => {
    console.log('connection disconnected');
    socket.emit('user-left', {name: name});
})
