import { Schema, model } from "mongoose";

const adminschema = new Schema({
    Heading: {
        type: String,
    },
    UserDate: {
        type: String,
 
    },
    desc: {
        type: String,
   
    }
});

const adminapi = model("adminapi", adminschema);

export default adminapi;
