//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import cardioRoutes from './routes/cardioRoutes.mjs';
import nutritionRoutes from './routes/nutritionRoutes.mjs';
import weightsRoutes from './routes/weightsRoutes.mjs';
import allCardio from './data/cardioSeedData.mjs';
import allWeights from './data/weightsSeedData.mjs'
import allNutrition from './data/nutritionSeedData.mjs';
import Cardio from './models/cardioSchema.mjs';
import Weights from './models/weightsSchema.mjs'
import Nutrition from './models/nutritionSchema.mjs'

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

//Seed
app.get('/cardioSeed', async (req, res) => {
    await Cardio.deleteMany({});
    await Cardio.create(allCardio);
    res.send('Seeded data!');
});

app.get('/nutritionSeed', async(req, res) => {
    await Nutrition.deleteMany({});
    await Nutrition.create(allNutrition);
    res.send('Seeded data!');
});

app.get('/weightsSeed', async(req, res) => {
    await Weights.deleteMany({});
    await Weights.create(allWeights);
    res.send('Seeded data!');
});

//Listener
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});