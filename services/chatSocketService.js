module.exports = function (socket) {

    socket.on('join guest room', (data) => {
        socket.join('guestroom');
        console.log('JOINED GUEST ROOM');
    });

    socket.on('leave guest room', (data) => {
        console.log('LEFT GUEST ROOM');
        socket.leave('guestroom');
    });

    socket.on('join room', (room) => {
        socket.join(room.roomId);
        console.log('JOINED ROOM');
    });

    socket.on('leave room', (room) => {
        console.log('LEFT ROOM');
        socket.leave(room.roomId);
    });

    socket.on('disconnect', function (data) {
        console.log('disconnect');
    });

};
