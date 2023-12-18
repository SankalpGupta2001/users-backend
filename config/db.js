const mongoose = require('mongoose');

const connectDB = async () => {
    try {
     
      await mongoose.connect("mongodb+srv://saralgupta2001:hGAicUwtTDemVTAM@cluster0.5iwt1mf.mongodb.net/users"
, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB successfully!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
  
  module.exports = connectDB;
