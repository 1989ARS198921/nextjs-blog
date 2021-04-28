export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,     
    host: "smtp.gmail.com",
       auth: {
            user: 'firstarscomp@gmail.com',
            pass: 'German198921083201',
         },
    secure: true,
  });
  
  const mailData = {
      from:'firstarscomp@gmail.com',
      to:'nas90tia@mail.ru',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div>
      <p>Sent from: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
  })

  console.log(req.body)
  res.send('success')
}