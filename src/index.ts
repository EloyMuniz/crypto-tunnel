// dentro do container
import https from 'https';
import fs from 'fs';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Olá!');
});

const options = {
    key: fs.readFileSync('./src/certs/server.key'),
    cert: fs.readFileSync('./src/certs/server.cert')
};

https.createServer(options, app).listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
