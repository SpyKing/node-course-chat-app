var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Hey use Socket.io!'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server')
});

socket.on('newMessage', function (messageData) {
    console.log('New Message', messageData);
});