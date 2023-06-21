import Product from "../models/productSchema.js"

export const createProduct = async(req, res) => {
    try {
        
        const body = {...req.body, createdByUser: req.user.id}
        
        const product = await Product.create(body)

        res.status(201).json({
            success: true,
            message: "Product created Successfully!",
            product
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getProduct = async(req, res) => {
    try {
        
        const product = await Product.findById(req.params.id)

        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product Not Found!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product found Successfully!",
            product
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getAllProducts = async(req, res) => {
    try {
        
        const products = await Product.find()

        if(!products || products.length === 0){
            return res.status(400).json({
                success: false,
                message: "No products found, Please created products!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Products found Successfully!",
            noOfProducts: products.length,
            products
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}