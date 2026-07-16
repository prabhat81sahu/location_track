const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress;
    console.log(`[+] Target connected: ${ip}`);
    
    ws.on('message', msg => {
        const data = JSON.parse(msg);
        console.log(`[${new Date().toISOString()}] ${ip} - heartbeat`);
        // Data received - target is still on your page
    });
    
    ws.on('close', () => {
        console.log(`[-] ${ip} disconnected`);
    });
});
