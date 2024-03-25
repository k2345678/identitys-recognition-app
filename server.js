const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./userModel');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());



mongoose.connect('mongodb://localhost:27017/useridentity', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
});

app.get('/users', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Failed to retrieve users", error: err.message });
    }
});

app.post('/users', async(req, res) => {
    const { name, email, phone, facebook } = req.body;

    if (!name || !email || !phone || !facebook) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({ name, email, phone, facebook });

    try {
        const savedUser = await newUser.save();
        res.status(201).json({ message: "User created successfully", user: savedUser });
    } catch (err) {
        res.status(500).json({ message: "Failed to create user", error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});