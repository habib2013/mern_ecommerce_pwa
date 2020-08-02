const express =  require('express');
const cors = require('cors');
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import bodyParser from 'body-parser';
const mongoose = require('mongoose'); 

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URL;
mongoose.connect(uri ,{useCreateIndex:true}
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
