const socket = io();

socket.on("connect", function () {
  console.log("Connected to server with ID: " + socket.id);
});