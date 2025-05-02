import mongoose from 'mongoose';

const cardioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: { 
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    calBurned:{
        type: Number,
        required: true
    }
});

export default mongoose.model("Cardio", cardioSchema);