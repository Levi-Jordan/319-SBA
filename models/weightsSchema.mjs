import mongoose from 'mongoose';

const weightsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
        default: Date.now,
        required: true
    }
});

export default mongoose.model("Weights", weightsSchema);