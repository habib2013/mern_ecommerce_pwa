import express from 'express';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import cors from 'cors';
import bodyParser from 'body-parser';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/products/',productRoute);

const uri = process.env.MONGODB_URL;
mongoose.connect(uri ,{useUrlParser:true,useCreateIndex:true}
   );
   const connection = mongoose.connection;
   connection.once('open', () => {
      console.log("MongoDB database connection established successfully");   
   })


  


app.listen(port,()=> {
   console.log(`Server is running on port: ${port}`);
});
