const mongoose = require("mongoose");
const DbConnection = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Database connection Successfull")
  } catch (error) {
    console.log(`Error While Connecting to Database`);
  }
};
module.exports=DbConnection