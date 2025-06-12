const mailService = require("../services/mailService");

const sendMail = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!message) {
            return res.status(400).json({ message: "Message is required" });
        }
        const mail = await mailService.sendMail({ name, email, message });
        return res.status(200).json({ message: "Mail sent successfully" });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message });
    }
}

module.exports = {
    sendMail
}