import bcrypt from bcrypt;
import User from "../models/user.models";


export async function register(req, res) {
    try {
        const {username, password, phoneNumber} = req.body;
        if (!username || !password || !phoneNumber) {
            return res.status(400).json({message: "Please fill in all fields"});
        }
        if (password.length < 6) {
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }
        if (phoneNumber.length !== 10) {
            return res.status(400).json({message: "Phone number must be 10 characters"});
        }
        const user = await User.findOne({$or: [{username}, {phoneNumber}]});
        if (user) {
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username, password: hashedPassword, phoneNumber});
        await newUser.save();
        return res.status(201).json({message: "User created successfully"});
    }catch(err) {
        console.error(err);
        return res.status(500).json({message: err.message});
    }
}

export async function login(req, res) {
    try {
        const {username, password} = req.body;
        if(!username || !password) {
            return res.status(400).json({message: "Please fill in all fields"});
        }
        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({message: "User already exists"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }
        return res.status(200).json(
            user,
            {
                message: "Logged in successfully"});

    }catch(err) {
        console.error(err);
        return res.status(500).json({message: err.message});
    }
}