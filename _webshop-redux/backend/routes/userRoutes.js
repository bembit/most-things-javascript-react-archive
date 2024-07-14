import express from 'express';
import User from '../models/userModel.js';
import data from '../Data.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    await User.deleteMany({});
    const createdUser = await User.insertMany(data.users);
    res.send({ users: createdUser });
}));

// login route and logic

userRouter.post('/signin', expressAsyncHandler(async(req, res) => {
    const user = await User.findOne({ email: req.body.email })
    
    if (user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        } 
    } 
    res.status(401).send({ message: 'invalid credentials' });
})
)

// register

userRouter.post('/signup', expressAsyncHandler(async(req, res) => {
    const { name, email, password } = req.body
    const user = new User({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 8)
    });
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
    })
}))

export default userRouter;