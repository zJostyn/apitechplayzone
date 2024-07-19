"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: "elianlalangui@gmail.com",
        pass: "oyzz baqz veox ndeb",
    },
});
exports.transporter.verity().then(() => {
    console.log("Ready for send emails");
});
