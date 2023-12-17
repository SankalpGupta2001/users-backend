const mongoose = require('mongoose');

const connectDB = async () => {
    try {
     
      await mongoose.connect("mongodb+srv://saralgupta2001:sFbGLgVFxn15r1Zo@cluster0.pxynaxi.mongodb.net/users?retryWrites=true&w=majority"
, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB successfully!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
  
  module.exports = connectDB;
