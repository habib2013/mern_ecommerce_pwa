import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv';
const app = express();


doteenv.config();

const mongodbUrl = config.MONGODB_URL;

app.get('/api/products/:id',(req,res) => {
   const productId = req.params.id;
  const product = (data.products.find(x => x._id == productId));
   if(product){
      res.send(product);
   }
   else{
      res.status(404).send({msg : "Product Not Found"});
   }
});

app.get('/api/products',(req,res) => {
   res.send(data.products);
});

app.listen(5000,() => {console.log('Server running on localhost http://localhost:5000')})
