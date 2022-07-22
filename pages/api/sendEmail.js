const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
    const body = req.body;

    const message = `
    Name: ${body.username}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}\r\n
    `;

    const data = {
        to: process.env.MY_EMAIL,
        from: process.env.EMAIL,
        subject: "New portfolio contact message!",
        text: message,
        html: message.replace(/\r\n/g, "<br>"),
    };

    try {
        mail.send(data);
        return res.status(200).json({
            msg: "email sent successfully",
        });
    } catch (err) {
        return res.status(200).json({
            err,
        });
    }
};
