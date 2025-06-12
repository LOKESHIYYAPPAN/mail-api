const express = require('express');
const app = express();
const sendMail = require('./routes/mailRoute');

app.use(express.json());

app.use('/api/v1/mail', sendMail);


app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        message: 'Service is running smoothly',
        timestamp: new Date().toISOString()
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})