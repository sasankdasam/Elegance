const express=require('express');
const app=express();
const fs=require('fs');
const path=require('path');
const mongoose = require("mongoose")
require('dotenv').config();
const tls = require('tls');
tls.DEFAULT_MIN_VERSION = 'TLSv1'; // Adjust as needed
const port=process.env.PORT||3000

const static_routes=require('./routes/static_routes');
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected to database");
})

//test collection
const credentials = require('./models/credentials')

// app.set('view engine', 'ejs');
// const { compile } = require('ejs');
app.use(express.urlencoded({ extended: true })); // Middleware for form data
app.use(express.json()); // Middleware for JSON data

app.post('/signup', async (req, res) => {
    console.log('POST /signup called');
    try {
        const { email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Confirm password does not match with password.",
            });
        }

        const newCredential = await credentials.create({
            email,
            password,
        });
        await newCredential.save();

        return res.status(201).json({
            success: true,
            message: "Signup successful!",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "An error occurred. Please try again later.",
        });
    }
});

app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the email exists
        const user = await Credential.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found.',
            });
        }

        // Compare the provided password with the hashed password in the database
        if (password!=user.password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password.',
            });
        }

        // If login is successful
        return res.status(200).json({
            success: true,
            message: 'Login successful!',
            data: { email: user.email }, // You can return more details if required
        });
    } catch (error) {
        console.error('Error in /signin:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request.',
        });
    }
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/html","index.html"));
})

app.use('/',static_routes);

app.listen(port,(req, res)=>{
    console.log('server is running on port',port)
});