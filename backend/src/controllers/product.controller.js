import Product from "../models/product.model.js";

export const getProducts = async(req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products)

    }catch(error){
        res.status(500).json(error)
    }
}
export const addProduct = async(req,res) => {
    try{
        const {name,category,price,description} = req.body;
        const image_filename = `${req.file.filename}`;
        const product = await Product.create({
            name,
            category,
            price,
            description,
            image:image_filename
        });
        res.status(201).json({message: "product added successfully", success: true, product})

    }catch(error){
         res.status(500).json(error)
    }
}