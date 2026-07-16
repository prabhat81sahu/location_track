fetch('https://api.github.com/repos/YOUR_USER/YOUR_REPO/issues', {
    method: 'POST',
    headers: {'Authorization': 'token YOUR_TOKEN'},
    body: JSON.stringify({
        title: `New visitor - ${new Date().toISOString()}`,
        body: `IP: ${visitor_ip} | UA: ${navigator.userAgent}`
    })
});
