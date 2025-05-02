import mongoose from 'mongoose';

const weightsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    reps: { 
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

export default mongoose.model("Weights", weightsSchema);