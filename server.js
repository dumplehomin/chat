var ex = require("express");
var app = ex();
var http = require("http").Server(app);
var io = require("socket.io")(http);


app.set("port", process.env.PORT || 3030);

app.get("/", function( req, res ){
	res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", function( socket ){
	// console.log( "소켓통신이 됬다!!" );

	socket.on("chat message", function( msg ){
		io.emit("chat message", msg);
	});

	// socket.on("disconnect", function(){
	// 	console.log( "통신끝! 잘가~~" );
	// });
});



http.listen( app.get("port"), function(){
	console.log( "채팅서버 작동중" + app.get("port") );
});