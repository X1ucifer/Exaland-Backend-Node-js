const mongoose = require('mongoose')
const { Schema } = mongoose;

const products_Schema = new Schema({
    Image_cover:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    tokenId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    author_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    seller:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    walletaddress:{
        type:String,
        required:true
    }
});

const Product = mongoose.model("Product", products_Schema);
module.exports = Product;