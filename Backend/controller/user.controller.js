import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req,res)=>{
    try {
        //get the data from the request body that is the user
        const {fullname,email,password} = req.body;
        // now we will check if the user already exists
        const user = await User.findOne({email});
        // if user == true then we will return the message that user already exists
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        // Hashing the passoword
        // 10 is the number of rounds that bcrypt will hash the password (Salting)
        const hashedPassword = await bcrypt.hash(password, 10);

        // if user does not exist then we will tell to register the user
        const createUser = new User({
            fullname: fullname,
            email: email,
            password:hashedPassword
        })
        // save the user in the database
        await createUser.save();
        res.status(201).json({message:"User registered successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const login = async (req,res)=>{
    try {
        const {email, password} = req.body;
        // The User.findOne({email}) query will return a user document,
        // if a matching email is found, otherwise it will return null.
        // This means user can either be an object containing user details or null.
        const user = await User.findOne({email});
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!user || !isPasswordCorrect){
            return res.status(400).json({message:"Invalid Username or password"});
        }
        else{
            return res.status(200).json({message:"Login Successful", user:{
                _id: user._id,
                fullname: user.fullname,
                email: user.email 
            }});
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal server error"});
    }

}