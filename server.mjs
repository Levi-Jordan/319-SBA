//Imports
import express from 'express';
import dotenv from 'dotenv';

//Setups
dotenv.config();
const app = express ();
const PORT = process.env.PORT || 3001;


//Middleware
app.use(express.json()); //Body parsing 
//Routes

//Error Handling Middleware

//Listener
