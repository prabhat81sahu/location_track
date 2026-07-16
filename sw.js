self.addEventListener('message', event => {
    const data = event.data;
    // Send to your server periodically
    setInterval(() => {
        fetch('https://your-server.com/live', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data)
        });
    }, 30000); // every 30 seconds
});

// Service worker stays alive even across page navigations
self.addEventListener('activate', () => {
    self.clients.claim();
});
