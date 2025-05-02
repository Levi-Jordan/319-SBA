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
        required: true
    }
});

export default mongoose.model("Cardio", cardioSchema);