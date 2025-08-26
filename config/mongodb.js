const mongoose = require("mongoose");

exports.mongoDB = async() =>{
try{
await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("mongodb connected"));
 }catch(err){
        console.log({msg:"error connecting mongodb",message:err.message});
 }
}
//j
// hihd tsdg
// module.exports = mongoDB;