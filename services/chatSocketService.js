module.exports = function (socket) {

    socket.on('join guest room', (data) => {
        socket.join('guestroom');
        console.log('JOINED GUEST ROOM');
        socket.emit('joined guest room');
    });

    socket.on('leave guest room', (data) => {
        console.log('LEFT GUEST ROOM');
        socket.emit('left guest room');
        socket.leave('guestroom');
    });

    socket.on('add new room', (newRoom) => {
        console.log(newRoom);
        console.log('ADDED NEW ROOM');
        socket.broadcast.to('guestroom').emit('added new room', newRoom);
    });


    socket.on('disconnect', function (data) {
        console.log('disconnect');
    });

};
