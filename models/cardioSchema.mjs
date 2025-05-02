import mongoose from 'mongoose';

const cardioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    timeElapsed: { 
        type: Number,
        required: true
    },
    calBurned:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

export default mongoose.model("Cardio", cardioSchema);