'use strict';

const io = require('socket.io'); 

const caps = io(3000);
const transit = caps.of('/in-transit');
const delivered = caps.of('/delivered');

caps.on('connection', (socket) => {

    console.log('client connected', socket.id);

    socket.on('pickup', (payload) => {
        console.log('EVENT', payload);
        socket.emit('pickup', payload);
    });
});

transit.on('connection', (socket) => {
    console.log('client connected to transit', socket.id);
    socket.on('in-transit', (payload) => {
        console.log('EVENT', payload);
    });
});

delivered.on('connection', (socket) => {
    console.log('client connected to delivered', socket.id);
    socket.on('delivered', (payload) => {
        console.log('EVENT', payload);
        socket.emit('delivered', payload);
    });
});