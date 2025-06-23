const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRouter = require('./routes/contactRouter');
require('dotenv').config();


const app = express();
app.use(cors({
  origin: "http://localhost:5173"  //This  allows requests from the frontend running on this URL.Otherwise it will show CORS error.
}));
app.use(express.json()); // This middleware parses incoming JSON requests and makes the data available in req.body

//Routes
app.use('/api/contact',contactRouter)


//DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("MongodB connected successfully");
})
.catch((err)=>{
  console.error("MongoDB connection error:", err);
});


//Start Server
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set in the environment variables
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});