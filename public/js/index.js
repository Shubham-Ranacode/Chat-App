var socket=io();
socket.on('connect',function(){
    console.log('connected to server');

    socket.emit('createMessage',{
        from:'andrew@example.com',
        text:'Yup!thats work for me'
    });
});

socket.on('disconnect',function(){
    console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
    console.log('Received message:',message);
});
