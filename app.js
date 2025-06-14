const express = require('express');
const app = express();
const sendMail = require('./routes/mailRoute');
const cors = require('cors');

require('dotenv').config();

app.use(cors({
    origin: ['https://my-portfolio-liard-mu-27.vercel.app/'],
    credentials: true
}))

app.use(express.json());

app.use('/api/v1/mail', sendMail);


app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        message: 'Service is running smoothly',
        timestamp: new Date().toISOString()
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.port || 3000}`);
})


// code was deployed by render