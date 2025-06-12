const nodemailer = require('nodemailer');

const sendMail = async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lok493770@gmail.com',
            pass: 'suoa ozww rpdo eryo'
        }
    });

    // 1️⃣ Email to the sender (acknowledgment)
    const senderMail = {
        from: 'lok493770@gmail.com',
        to: email,
        subject: 'Thanks for reaching out',
        text: `Hi ${name},\n\nThanks for contacting us! We'll get back to you soon.\n\nBest,\nLokesh`
    };

    // 2️⃣ Email to yourself (notification)
    const receiverMail = {
        from: 'lok493770@gmail.com',
        to: 'lok493770@gmail.com',
        subject: `New message from ${name}`,
        text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    // Send both emails
    await transporter.sendMail(senderMail);
    await transporter.sendMail(receiverMail);

    return { success: true };
};

module.exports = {
    sendMail
};
