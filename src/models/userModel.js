import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role : {
        type:String,
        enum : ["user","chef","admin"],
        default: "user"
    },
    recipes :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "recipe"
        }
    ]
})

const userModel = mongoose.model("user",userSchema);

export default userModel;