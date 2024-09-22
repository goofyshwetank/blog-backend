const express = require('express');
const app = express();
const cors= require('cors');
app.listen(4000);
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const User = require("./models/Users");

const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

mongoose.connect("mongodb+srv://raiishu984:U3R6c7Hx98RAZT6r@cluster0.utljg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, salt),
        });
    res.json({userDoc});
    }catch(e){
        res.status(400).json(e);
    }
});
//mongodb+srv://raiishu984:U3R6c7Hx98RAZT6r@cluster0.utljg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0