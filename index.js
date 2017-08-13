var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
	socket.on('loaded', function(data){
		console.log(data.name);
	})
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});
