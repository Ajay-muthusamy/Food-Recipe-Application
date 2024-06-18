import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodSchema = new Schema({
    name: {
        type: String,
    },
    FoodTitle: {
        type: String,
    },
    shortdes: {
        type: String,
    },
    Recipe: {
        type: String,
    }
});

const FoodApi = model("FoodApi", foodSchema);

export default FoodApi;
