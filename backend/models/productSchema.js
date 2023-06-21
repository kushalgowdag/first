import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productBrand:{
        type: String
    },
    productName:{
        type: String,
        required: [true, "Please provide product name!"],
        maxlength: [50, "Product name can't exceed 50 character!"]
    },
    productPrice:{
        type: Number,
        required: [true, "Please provide product price!"],
        maxlength: [20, "Product price can't exceed 20 character!"]
    },
    createdByUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, { timestamps: true })

const productModel = mongoose.model("product", productSchema)

export default productModel