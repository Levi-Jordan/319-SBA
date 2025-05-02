import mongoose from 'mongoose';

const nutritionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gramsProtein: { 
        type: Number,
        required: true
    },
    gramsFat: { 
        type: Number,
        required: true
    },
    gramsCarb: { 
        type: Number,
        required: true
    },
    cal:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

export default mongoose.model("Nutrition", nutritionSchema);