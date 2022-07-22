const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
    const body = JSON.parse(req.body);
    console.log(body.username);

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
        return res.status(201).json({
            msg: "email sent successfully",
        });
    } catch (err) {
        return res.status(400).json({
            err,
        });
    }
};
