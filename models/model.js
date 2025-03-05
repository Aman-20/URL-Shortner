import mongoose from "mongoose";

const anyschema = new mongoose.Schema({
    shortcode:String,
    longcode:String
});

const anymodel = mongoose.model("shortUrl", anyschema);

export default anymodel;