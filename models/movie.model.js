import { model, Schema } from "mongoose";

const schema = new Schema({
    title : {
        type : String,
        required : true,
        unique : true,
    },
    desc : {
        type : String,
        required : true,
    }
});

const Movie = model("Movies",schema);

export default Movie;