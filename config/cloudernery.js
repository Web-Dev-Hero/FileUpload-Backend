let cloudinery=require('cloudinary').v2

require('dotenv').config()

exports.CloudIneryConnect=()=>{

  try{

   cloudinery.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET

   })



  }
 catch(err){
console.log(err)
 }



}