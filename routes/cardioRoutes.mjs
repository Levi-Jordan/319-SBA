import express from 'express';
import Cardio from '../models/cardioSchema.mjs'

const router = express.Router();

// Create
router.post('/', async (req, res) => {
    // Specify Action
    try {
        const newCardio = await Cardio.create(req.body);
        res.status(201).json(newCardio);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read
router.get('/', async (req, res) => {
    // Specify Action
    try {
        const allCardio = await Cardio.find({});
        res.status(200).json(allCardio);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});

// Update
router.put('/:id', async (req, res) => {
    // Specify Action
        const editCardio = await Cardio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        

    // Return Result
    res.json(editCardio);
});

// Delete
router.delete('/:id', async (req, res) => {
    // Specify Action
    const deleteCardio = await Cardio.findByIdAndDelete(req.params.id);

    // Return Result
    res.json(deleteCardio);
});
export default router;