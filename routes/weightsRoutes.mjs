import express from 'express';
import Weights from '../models/weightsSchema.mjs'

const router = express.Router();

// Create
router.post('/', async (req, res) => {
    // Specify Action
    try {
        const newWeights = await Weights.create(req.body);
        res.status(201).json(newWeights);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read
router.get('/', async (req, res) => {
    // Specify Action
    try {
        const allWeights = await Weights.find({});
        res.status(200).json(allWeights);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    // Specify Action
    const editWeights = await Weights.findByIdAndUpdate(req.params.id, req.body, { new: true });


    // Return Result
    res.json(editWeights);
});

// Delete
router.delete('/:id', async (req, res) => {
    // Specify Action
    const deleteWeights = await Weights.findByIdAndDelete(req.params.id);

    // Return Result
    res.json(deleteWeights);
});
export default router;