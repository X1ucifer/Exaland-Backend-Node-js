const Product = require('../models')
exports.add_products = async (req, res) => {
    try {
        const { Image_cover,
            image,
            tokenId,
            name,
            description,
            price,
            date,
            author_name,
            seller,
            owner,
            walletaddress } = req.body
        if (!(Image_cover &&
            image&&
            tokenId&&
            name&&
            description&&
            price&&
            author_name&&
            date&&
            seller&&
            owner&&
            walletaddress)) {
            return res.status(400).json({
                status: 'Error',
                Message: "required all fields"
            })
        }
        let produc = new Product({
            Image_cover,
            image,
            tokenId,
            name,
            author_name,
            description,
            price,
            date,
            seller,
            owner,
            walletaddress
        })
        await produc.save()
        res.status(200).json({
            status: 'Success',
            message: "Created successfully"
        })
    } catch (err) {
        console.log(`--------------------------------
            ${err}`)
        res.status(400).send({
            status: "Error",
            message: 'Error in server'
        })
    }

}

exports.get_product = async(req,res)=>{
    try{
        const result = await Product.find({}).exec();
        res.status(200).json(result);
    }catch(err){
        res.status(400).send({
            status: "Error",
            message: 'Error in server'
        }) 
    }
}