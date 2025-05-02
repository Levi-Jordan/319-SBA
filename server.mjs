//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';

//Setups
dotenv.config();
const app = express ();
const PORT = process.env.PORT || 3001;


//Middleware
app.use(express.json()); //Body parsing 
connectDB();
//Routes

//Error Handling Middleware

//Listener
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});