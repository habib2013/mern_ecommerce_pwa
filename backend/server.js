import express from 'express';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import bodyParser from 'body-parser';
// New changes
import cors from 'cors';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URL;
mongoose.connect(uri ,{useUrlParser:true,useCreateIndex:true}
   );
   const connection = mongoose.connection;
   connection.once('open', () => {
      console.log("MongoDB database connection established successfully");   
   })

   app.use(bodyParser.json());
   app.use('/api/users', userRoute);
   app.use('/api/products/',productRoute);

app.listen(port,()=> {
   console.log(`Server is running on port: ${port}`);
});
