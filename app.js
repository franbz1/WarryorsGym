const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const port = process.env.PORT || 5000;

const app = express();

//app middelwares

express.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use("/public", express.static("public"));

//app routes
app.get("/warryorsgym1", (req, res) => {
  res.sendFile(__dirname + `/public/index.html`);
});

app.post("/warryors1post1", (req, res) => {
  const data = req.body;

  if (Object.keys(data).length > 0) {
    res.status(200).send("Datos recibidos!");
    console.log("Nombre: ", data.name);
    console.log("Email: ", data.email);
    console.log("Mensaje: ", data.message);
    console.log(req.body);

    let transporter = nodemailer.createTransport({
      service: '',
      auth: {
          user: "",
          pass: "",
      },
  })

  let mailOptions = {
    from: "",
    to: "",
    subject: "Nuevo formulario de contacto",
    html: `
    <p>Nombre: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Mensaje: ${data.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  } else {
    console.log("objeto vacio");
  }
});

app.post("/warryors1post2", (req, res) => {
  const data = req.body;

  if (Object.keys(data).length > 0) {
    res.status(200).send("Datos recibidos!");
    console.log("Nombre: ", data.name);
    console.log("Email: ", data.email);
    console.log("Mensaje: ", data.message);
    console.log("Telefono: ", data.phone);
    console.log(req.body);

    let transporter = nodemailer.createTransport({
      service: '',
      auth: {
          user: "",
          pass: "",
      },
  })

  let mailOptions = {
    from: "",
    to: "",
    subject: "Nuevo formulario de contacto",
    html: `
    <p>Nombre: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Telefono: ${data.phone}</p>
    <p>Mensaje: ${data.message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  } else {
    console.log("objeto vacio");
  }
});

app.listen(port, () => {
  console.log(`app start at port:${port}`);
});
