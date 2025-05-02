//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import cardioRoutes from './routes/cardioRoutes.mjs'
import nutritionRoutes from './routes/nutritionRoutes.mjs'
import weightsRoutes from './routes/weightsRoutes.mjs'

//Setups
dotenv.config();
const app = express ();
const PORT = process.env.PORT || 3001;


//Middleware
app.use(express.json()); //Body parsing 
connectDB();
//Routes
app.use('/api/cardio', cardioRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/weights', weightsRoutes);
//Error Handling Middleware

//Listener
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});