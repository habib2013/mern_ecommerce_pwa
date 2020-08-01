import express from 'express';
import Product from '../models/productModel';
import { getToken } from '../util';

const router = express.Router();

router.get('/', async (req,res) => {
const products = await Product.find({});
res.send(products);
});

router.get('/:id', async (req,res) => {
   const product = await Product.findOne({_id:req.params.id});
   if (product) {     
      res.send(product);
   }
   else{
      return res.status(404).send({msg: ' Not Found'});
   }
   });
   

router.post('/', async (req,res) => {
   const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      brand: req.body.brand,
      category: req.body.category,
      numberInsStock: req.body.numberInsStock,
      description: req.body.description,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
     

   });
      const newProduct = await product.save();
      if (newProduct) {
          return  res.status(201).send({msg: 'New Product created',data: newProduct});
      }
      return res.status(500).send({msg:'unable to create product'})
});


router.put('/:id', async (req,res) => {
   const productId = req.params.id;
   const product = await Product.findById(productId);

   if(product){
         product.name = req.body.name;
         product.price = req.body.price;
         product.image = req.body.image;
         product.brand = req.body.brand;
         product.category = req.body.category;
         product.numberInsStock = req.body.numberInsStock;
         product.description = req.body.description;
 
         const updateProduct = await product.save();
         if (updateProduct) {
             return  res.status(200).send({msg: 'Product Updated',data: updateProduct});
         }
      }
      
      return res.status(500).send({msg:'unable to Updating product'})

});

router.delete('/:id', async (req,res) => {
   const deleteProduct = await Product.findById(req.params.id);
   if (deleteProduct) {
      await deleteProduct.remove();
      res.send({msg: 'Product deleted'});
   }
   else{
      res.send('Error In Deletion');
   }
});


export default router;