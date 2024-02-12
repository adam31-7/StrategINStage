import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import {UserRouter} from './routes/user.js'
import {User} from './models/User.js'


const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.get('/users', (req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.use(cookieParser())
app.use('/auth', UserRouter)

const port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://user-db:B80BvNypatoQ7TuS@cluster0.jtoclsl.mongodb.net/authentication")


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})