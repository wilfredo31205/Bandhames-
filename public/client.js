
        const io = require("socket.io-client");
        const socket = io(" http://localhost:8080", {
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "abcd"
            }

        });



          /// Para emitir
  // socket.emit('mensaje-to-server', { data });
  // Para escuchar
  socket.on('current-bands', (bands) => {
    console.log(bands);
    // callback a ejecutar
});